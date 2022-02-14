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

var x = UML;
x.theme('bluegray')
x.set('skinparam linetype ortho')
var tools = x.frame('Floor Plan Tools'),
    ss = x.component('1a.').type('MS_Visio').note('Resource composition'),
    t = x.rectangle('1b. Tasking', 'Tasking').type('AutoCAD'),
    r = t.copy('1c. Drafting', 'Drafting'),
    s = t.copy('1d. Security', 'Security assessment'),
    pp = x.file('1e. Plan').type('document').note('Generated Floor Plan and associaed data').width(20),
    pr = pp.copy('4a. Report', 'Generated Floor Report document / data'),
    d = t.copy('2. Dashboard', 'Floor Monitoring (using AutoCAD)'),
    ir = t.copy('3. Contstruction', 'Construction works'),
    m = t.copy('4b. Revision', 'by an external design body'),
    u = x.database('5. RPA').type('MS_SQL').note('RPA Database'),
    io = x.rectangle('Wood Works').type('manual'),
    to = io.copy('CAD Works');

//var note = ss.chain(x.box('', 'note', 'This task is unconfirmed because it requires coordination with an external contractors'));
//tools.contains(note);
tools.contains(ss, t, r, s, pp, pr, d);
ss.right(t)
t.right(r)
r.right(s)
s.right(pp)
pp.down(pr)
pr.left(d)
t.connect(d);
s.connect(d);
io.right(ir)
to.up(ir)
m.left(ir)
u.up(ir)

pp.align(pr);
r.align(d).align(ir);
m.align(u);
io.align(to)
