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

// UML.maxEdgeLabelSize = 50;
// UML.set('skinparam actorstyle awesome');
// //UML.set('skinparam nodesep 80');
// var u = UML.box('Person', 'actor', 'User'),
//     w = u.copyAs('Workstation', '', 23, 'node', 'PC'),
//     wb = w.copyAs('Web browser', 'Provides user with access to the Internet', 0, 'component', 'Chrome'),
//     ws = UML.box('Windows', 'node', 'Web server'),
//     ds = ws.copyAs('Database server'),
//     ss = UML.box('MS_SQL_Server', 'database', 'SQL server', 'Provides data storage'),
//     pl = UML.box('IIS', 'component', 'Presentation layer', 'Provides web interface'),
//     di = UML.box('.NET', 'component', 'Database interface', 'Performs data operations');
// ws.contains(pl, di)
// w.contains(wb)
// ds.contains(ss)
// u.chain(wb, 1, 'Uses').chain(pl, 1, 'Uses via HTTPS').chain(di, 2, 'Uses').chain(ss, 1, 'Uses via TCP/IP')
// wb.align(ss)

var x = UML;
x.edge(50).boxWidth(23).set('skinparam actorstyle awesome');
var u = x.actor('User').type('Person'),
    w = x.node('Workstation').type('PC'),
    wb = x.component('Web browser').note('Provides user with access to the Internet').type('Chrome'),
    ws = x.node('Web server').type('Windows'),
    ds = ws.copy('Database server'),
    ss = x.database('SQL server').type('MS_SQL').note('Provides data storage'),
    pl = x.component('Presentation layer').type('IIS').note('Provides web interface'),
    di = x.component('Database interface').type('.NET').note('Performs data operations');
ws.contains(pl, di)
w.contains(wb)
ds.contains(ss)
u.uses(wb)
wb.uses(pl).end('HTTP')
pl.uses(di).direction('d')
di.uses(ss).end('TSQL')
wb.align(ss)
//wb.align(ss)
