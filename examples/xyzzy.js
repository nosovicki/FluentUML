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

var u = UML, grid = 'abcde'.toUpperCase().split(''), gg = [];
for (let i = 0; i < grid.length; ++i) {
	gg.push([])
	for (let j = 0; j < grid.length; ++j) {
		var node = u['database cloud'.split(' ')[j%2]](grid[i] + grid[j])
		gg[i].push(node)
		if (j > 0)
			gg[i][j - 1].connect(node)
		if (i > 0)
			gg[i - 1][j].connect(node)
	}
}
function tokenize(name, expr, rules) {
	if (!rules.filter(x=>x).length)
		return u.label(name).note(expr)
	var rule = rules.shift().split('[')
	var ls = expr.split(new RegExp('[' + rule[1] + ']+')).filter(x=>x.trim())
	if (ls.length == 1)
		return tokenize(name, expr, rules)
	var node = u.card(name)//.note(expr)
	node.connect(ls.map(part=>tokenize(rule[0], part, rules.slice())))
	return node
}
tokenize('Paragraph', 'Enjoy paragraphs! Paragraphs form prose; they are not required, but self-sufficient.', 'Sentence[!.;] Sentence Part[,] Word[ ] Word Part[-]'.split(']'))
