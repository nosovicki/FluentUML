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

UML.maxBoxSize = 20;
UML.theme('plain')
var c = UML.package('Language').note('DSL').type('MySystem'),
i = c.copy('Interpreter'),
s = c.copy('Existing System').type('OS'),
dsl1 = UML.component('Feature A').note('Allows expressions of type A').type('MySystem'),
dsl2 = dsl1.copy('Feature B', 'Allows expressions of type B'),
int1 = dsl1.copy('Parser A', 'Executes system procedures'),
int2 = dsl1.copy('Parser B', 'Executes system procedures'),
sub1 = UML.component('subsystem A').note('Does not understand DSL').type('OS_Component');
sub2 = sub1.copy('subsystem B', 'Does not understand DSL');

dsl1.align(dsl2);
int1.align(int2);
sub1.align(sub2);
c.contains(dsl1, dsl2);
i.contains(int1, int2);
s.contains(sub1, sub2);
dsl1.right(int1)
.descend(sub1)
dsl2.right(int2)
.descend(sub2)
int2.up(sub1);
