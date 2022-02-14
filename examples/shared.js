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

UML.boxWidth(20);
var a = UML.node('System A').type('Server').note('Both serves own users and shares its data with the client');
var b = UML.node("System B").type('Client').note('Both serves its own data and retransmits data from System A');

a.up(UML.database('Data'))
a.down(UML.actor('User'))
a.down(UML.actor('User'))
b.down(UML.actor('User'))
b.down(UML.actor('User'))
b.down(UML.actor('User'))
b.down(UML.actor('User'))
b.down(UML.actor('User'))
b.down(UML.actor('User'))
b.left(a).note('Repeatedly calls server for every user request').tip('')
