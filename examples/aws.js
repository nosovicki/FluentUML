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

//UML.set('left to right direction')
UML.set('skinparam monochrome true')
UML.set('skinparam shadowing false')
UML.set('skinparam defaultFontSize 12')
UML.set('skinparam componentBorderThickness 1')
UML.set('skinparam nodeBorderThickness 1')
UML.set('skinparam actorStyle awesome');
UML.set('skinparam nodesep 100')
UML.maxBoxSize = 10;
var aws = UML.box('', 'node', 'AWS Cloud'),
mobile = aws.copy('Mobile device'),
pc = mobile.copy('Server'),
adex = UML.box('', 'component', 'Ad Exchange'),
uu = UML.box('', 'actor', 'Users'),
app = UML.box('', 'component', 'Publisher app or web'),
srv = app.copy('Smadex Service');

aws.contains(srv);
mobile.contains(app);
pc.contains(adex);
uu
.connect(srv, 2, '5. Impression / click / instal / event (request_id)')
.chain(app, 2, '1. Visits')
.chain(adex, 2, '2. Start auction')
.chain(srv, 2, '3. Bid request / response')
.chain(app, 2, '4. Show Ad')
//uu.align(adex);
