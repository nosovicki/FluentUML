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
var a = UML.node('Master').type('Client').note('Responsible for change propagation')
var b = UML.node('Slave').type('Server').note('Constantly waits for changes');
var ta = UML.database('Table A')
var tb = UML.database('Table B')

a.right(ta).note('Modify')
a.down(b).note('Push change')
b.right(tb)
