/**
 * Copyright 2022 The FluentUML Authors
 *
 * Licensed under the EUPL, Version 1.1 or - as soon they
 * will be approved by the European Commission - subsequent
 * versions of the EUPL (the "Licence");
 * You may not use this work except in compliance with the Licence.
 * You may obtain a copy of the Licence at:
 *
 * https://joinup.ec.europa.eu/collection/eupl/eupl-text-11-12
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the Licence is distributed on an "AS IS" basis,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the Licence for the specific language governing permissions and
 * limitations under the Licence.
 */

(function() {
var cnt = 0;
var str2obj = function(str) {
	return str.split(' ').reduce(function(acc,curr) { return (acc[curr]='',acc); },{});
}
var removeElement = function(array, elem) {
    var index = array.indexOf(elem);
    if (index > -1) {
        array.splice(index, 1);
    }
}
var abort = function (diagram, error) {
	diagram.raw = [];
	diagram.nodes = [];
	diagram.edges = [];
	diagram.color(1);
	diagram.rectangle("Error").note(error);
}
var capitalize = function (str, lower = false) {
	return (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, function(match) { return match.toUpperCase(); });
}
var wordwrap = function(str, width) {
    var ar = [];
    str.replace(new RegExp('(?:\\S(?:.{0,' + width + '}\\S)?(?:\\s+|-|$)|(?:\\S{' + width + '})|(?:\n))', 'g'), function(s) { ar.push(s); return s; });
    return ar;
}
var swap = function(obj, k1, k2, transformer) {
	var tmp = obj[k1];
	obj[k1] = obj[k2];
	obj[k2] = tmp;
}
var defaults = {
	'server': 'https://www.plantuml.com/plantuml/img/',
	'title': '',
	'header': '',
	'footer': '',
	'theme': false,
	'boxWidth' : 40,
	'edge' : 15,
	'color' : false,
	'divider' : ' ',
	'line' : '.',
	'tip' : true,
};
var associations = {
	'uses' : '>',
	'extends' : '^',
	'belongs': '*',
	'appears': 'o',
	'calls': '(', // mk call(interface) -- check must be interface
	'provides': ' ',  // check for interface form
	'touches': ' ',
}
var directions = str2obj('up down left right');
window.FluentUML = function() {
	this.raw = [];
	this.conf = {}
	this.nodes = [];
	this.edges = [];
	//this.set('allowmixing')
	this.set('skinparam actorTextAlignment center')

	for (let k in defaults)
		this.conf[k] = defaults[k];
}
for (let k in defaults) {
	FluentUML.prototype[k] = function (arg) {
		if (arg == undefined)
			return this.conf[k];
		this.conf[k] = arg;
		return this;
	}
}
FluentUML.prototype.nodeDividers = [' ', '---', '==='];
FluentUML.prototype.themes = str2obj('amiga black-knight bluegray blueprint cerulean cerulean-outline crt-amber crt-green cyborg cyborg-outline hacker lightgray materia materia-outline metal mimeograph minty plain resume-light sandstone silver sketchy sketchy-outline spacelab superhero superhero-outline united');
// be careful editing this -- make sure your list includes collections
FluentUML.prototype.nodeForms = str2obj('actor agent artifact boundary card class circle cloud collections component control database entity file folder frame hexagon interface label node note package person queue rectangle stack storage usecase');
for (let k in FluentUML.prototype.nodeForms) {
	FluentUML.prototype[k] = function (title) {
		return this.box('', k, title);
	}
}
FluentUML.prototype.showThemes = function() {
	this.raw = [];
	this.theme('')
	this.color(1)
	this.set('help themes');
	return this;
}
FluentUML.prototype.showNodes = function() {
	var nodes = this.box('', 'frame', 'Nodes');
	for (var k in this.nodeForms) {
		nodes.contains(UML.box(k, k, 'Title', 'Remark'));
	}
	return nodes;
}
FluentUML.prototype.edgeLines = '. - = ~'.split(' ');
FluentUML.prototype.showEdgeLines = function () {
	var edges = this.box('', 'frame', 'Edge Lines');
	for (let i = 0; i < this.edgeLines.length; ++i) {
		var line = this.edgeLines[i];
		var a = this.box('', 'label', 'A');
		var b = a.copy('B');
		a.connect(b, 1, '<<' + line + line + '>>', '', ' ', line);
		edges.contains(a, b);
	}
	return edges;
}
FluentUML.prototype.arrowsL = '< << * o 0 ) + #  ^ <| <|| <|: @'.split(' ');
FluentUML.prototype.arrowsR = '> >> * o 0 ( + # \\\\ ^ |> ||> :|> @'.split(' ');
FluentUML.prototype.arrowNames = 'Information_Flow Synchronous_Message Composition Aggregation Provided_Interface Required_Interface Containment Aggregation Asynchronous_Message Inheritance Inheritance   Ownership'.split(' ');
FluentUML.prototype.showArrows = function () {
	var side = Math.round(this.arrowsL.length / 2);
	var arrows = this.box('', 'frame', 'Arrows');
	var old = null;
	for (let i = 0; i < this.arrowsL.length; ++i) {
		var L = this.arrowsL[i];
		var R = this.arrowsR[i];
		var a = this.box('', 'label', 'a');
		var b = a.copy('b');
		var lbl = '**""<font size=14>' + L + '--' + R + '</font>""**\\n' + this.arrowNames[i].replace('_','\\n');
		a.connect(b, 2, lbl, L, R, '~', 'r', '', 110);
		if (old && (i % side) != 0)
			old.align(a, 2);
		old = a;
		arrows.contains(a, b);
	}
	return arrows;
}
FluentUML.prototype.set = function (str) {
	this.raw.push(str + '\n');
}
	
FluentUML.prototype.box = function(type, form, name, txt, width) {
	return new node(this, type, form, name, txt, width);
}
FluentUML.prototype.toString = function() {
	res = [];
	if (this.conf.theme) {
		res.push('!theme ' + this.conf.theme + '\n');
	}
	else if (!this.conf.color) {
		var style = ['<style>'];
		for (k in str2obj('class sequence usecase class object activity component deployment state timing'))
			style.push(k + 'Diagram {\nLineThickness 1\nFontSize 12\n}\n');
		style.push('</style>')
		res.push([
			style.join('\n') + '\n',
			'skinparam monochrome true',
			'skinparam noteBackgroundColor white',
			//'skinparam packageBorderColor #999',
			'skinparam shadowing false',
			'skinparam defaultFontSize 12',
			'skinparam usecaseBorderThickness 1',
			'skinparam componentBorderThickness 1',
			'skinparam rectangleBorderThickness 1'
		].join('\n') + '\n');
	}
	res.push(this.raw.join('\n')) + '\n';
	for (let k in str2obj('header title footer'))
		if (this.conf[k])
			res.push(k + ' ' + this.conf[k] + '\n');
	var done = {}
	for (let i = 0; i < this.nodes.length; ++i) {
		res.push(this.nodes[i].toString());
	}
	for (let i = 0; i < this.edges.length; ++i) {
		res.push(this.edges[i].toString());
	}
	return res.join('');
}
FluentUML.prototype.toURL = function () {
	return this.conf.server + plantumlEncoder.encode(this.toString())
}
FluentUML.prototype.toHTML = function () {
	var id = 'fluentUML-' + Math.random()
	return '<img src="' + u.toURL()  + '"/>'
	+ '<br/><a style=font-size:11px href="#" onclick="var e=document.getElementById(\'' + id + '\'); e.style.display = e.style.display != \'none\' ? \'none\' : \'block\';">source</a>'
	+ '<pre id=' + id + ' style=display:none;border:solid;padding:10px>' + u.toString().replace(/[\u00A0-\u9999<>\&]/g, function(i) { return '&#'+i.charCodeAt(0)+';'; })
}
function node(diagram, type, form, name, txt, width, divider) {
	this.diagram = diagram;
	diagram.nodes.push(this);
	this.ancestor = diagram;
	this.nodes = [];
	this.id = ++cnt;
	this.conf = {
		type : type || '',
		form : form || 'agent',
		name : name || undefined,
		note : txt || '',
		width : width || diagram.conf.boxWidth,
		divider : divider || diagram.conf.divider,
	}
}
for (let k in str2obj('type form name note width divider')) {
	node.prototype[k] = function (value) {
		if (value == undefined)
			return this.conf[k];
		this.conf[k] = value;
		return this;
	}
}
for (let k in associations) {
	node.prototype[k] = function (to, direction, label) {
		var lbl = label || capitalize(k);
		return this.connect(to, 1, lbl, ' ', associations[k], '.', direction);
	}
}
node.prototype.toString = function() {
	var cnf = this.conf;
	if (cnf.form == 'note')
		return this.toShortString(1) + '\n';
	if (this.nodes.length)
		return this.toFullString(1);
	var brackets = '[]';
	var bld = cnf.note ? '**' : '';
	var lbl = bld + wordwrap(capitalize(cnf.name || ''), cnf.width).join(bld + '\n' + bld) + bld;
	var div = cnf.divider ? (cnf.divider + '\n') : '';
	var rem = cnf.note ? ('\n' + div + wordwrap(cnf.note, cnf.width).join('\n')) : '';
	var stereo = (cnf.type ? (' <<'+cnf.type+'>>') : '');
	if (cnf.form == 'class')
		return cnf.form + ' "' + lbl.replace('\n', '\\n') + '" as x' + this.id + stereo + ' {\n' + rem + '\n}\n';
	return cnf.form + ' x' + this.id + stereo + ' [\n' + lbl + rem + '\n]\n';
}
node.prototype.toFullString = function() {
	var res = [];
	res.push(this.toShortString(1));
	res.push(' {\n');
	for (var j = 0; j < this.nodes.length; ++j) {
		res.push(this.nodes[j].toString());
	}
	res.push('}\n');
	return res.join('');
}
node.prototype.toShortString = function(nobold) {
	var cnf = this.conf;
	var stereo = ((cnf.type && cnf.form != 'note') ? (' <<'+cnf.type+'>>') : '');
	var lbl = wordwrap(nobold? cnf.name: capitalize(cnf.name), cnf.width).join(nobold ? '\\n' : '**\\n**')
	return cnf.form + ' "' + lbl + '" as x' + this.id + stereo;
}
node.prototype.toTinyString = function() {
	return this.conf.form + ' "' + this.conf.name + '"';
}
function edge(diagram, fr, to, length, note, arrowL, arrowR, line, direction, extra, maxWidth, type, start, end, tip) {
	this.diagram = diagram;
	this.from = fr;
	this.to = to;
	this.conf = { 
		length : length || 2,
		direction : direction || '',
		width : maxWidth || diagram.conf.edge,
		note : note || '',
		start : start || '',
		end : end || '',
		arrow : arrowR || '>',
		line : line || diagram.conf.line,
		arrowBack : arrowL || '',
		extra : extra || '',
		type : type || '',
		tip : tip || diagram.conf.tip,
	}
	diagram.edges.push(this);
	this.id = diagram.edges.length;
	return this;
}
for (let k in str2obj('length direction width note arrow line arrowBack extra type start end tip')) {
	edge.prototype[k] = function (value) {
		if (value == undefined)
			return this.conf[k];
		this.conf[k] = value;
		return this;
	}
}
for (let k in directions) {
	node.prototype[k] = function (n2) {
		return this.connect(n2)[k]();
	}
	edge.prototype[k] = function () {
		return this.direction(k[0]);
	}
}
edge.prototype.toString = function () {
	var cnf = this.conf;
	var stereo = (cnf.type ? (' <<'+cnf.type+'>>\\n') : '');
	var tip = cnf.tip ? ' >' : '';
	var lbl = (cnf.note ? (': ' + stereo + wordwrap(cnf.note, cnf.width).join('\\n') + tip) : '');
	var lbl1 = cnf.start ? ('"' + cnf.start + '"') : '';
	var lbl2 = cnf.end ? ('"' + cnf.end + '"') : '';
	var special = cnf.extra ? ('[' + cnf.extra + ']') : '';
	var line = cnf.direction ? (cnf.line + cnf.direction + cnf.line) : cnf.line.repeat(Math.abs(cnf.length));
	return 'x' + this.from.id + ' ' + lbl1 + ' ' + cnf.arrowBack + line + special + cnf.arrow + ' ' + lbl2 + ' x' + this.to.id + lbl + '\n';
}
edge.prototype.descend = function(node) {
	return this.to.connect(node, this.length(), this.note(), this.arrowBack(), this.arrow(), this.line(), this.direction(), this.extra(), this.width());
}
edge.prototype.fork = function(node) {
	return this.from.connect(node, this.length(), this.note(), this.arrowBack(), this.arrow(), this.line(), this.direction(), this.extra(), this.width());
}
node.prototype.copy = function(name, txt, width, form, type) {
	var cnf = this.conf
	return new node(this.diagram, type || cnf.type,  form || cnf.form, name || cnf.name, txt || cnf.note, width || cnf.width);
}
node.prototype.connect = function(node, length, label, arrowL, arrowR, line, direction, extra, maxWidth) {
	if (Array.isArray(node))
		return node.map(function (n) { return this.connect(n, length, label, arrowL, arrowR, line, direction, extra, maxWidth); }, this);
	var cnf = this.conf
	var edg = new edge(this.diagram, this, node, length, label, arrowL, arrowR, line, direction, extra, maxWidth);
	if (length < -1) {
		swap(edg, 'from', 'to');
		edg.arrow = this.diagram.arrowsL[this.diagram.arrowsR.indexOf(edg.arrow)]
		swap(edg, 'arrow', 'arrowBack');
	}
	return edg;
}
node.prototype.contains = function() {
	for (let i = 0; i < arguments.length; i++) {
		var child = arguments[i];
		removeElement(child.ancestor.nodes, child);
		this.nodes.push(child);
		child.ancestor = this;
	}
	return this;
}
FluentUML.prototype.together = function() {
	var grp = this.box('', 'together', 'Together');
	grp.contains.apply(grp, arguments);
}
node.prototype.align = function (node, lvl) {
	new edge(this.diagram, this, node, lvl || 2, '', ' ', ' ', '-', '', 'hidden');
	return node;
}
node.prototype.Type = function (str) { this.type = str; return this; }
node.prototype.Form = function (str) { this.form = str; return this; }
node.prototype.Name = function (str) { this.name = str; return this; }
node.prototype.Remark = function (str) { this.rem = str; return this; }
node.prototype.Width = function (val) { this.width = val; return this; }
})();
