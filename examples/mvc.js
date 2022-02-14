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

var u = UML;
u.theme('plain')
u.boxWidth(20)
var m = u.component('Model').type('MVC').note('Business logic')
var v = m.copy('View').note('Visual layout');
var c = m.copy('Controller').note('Runs the show');
var cnote = u.note('Lets you use one view with many models, or bind one model to many views').width(13);

cnote.touches(c, 'r');
c.down(m).note('Updates');
m.up(c).note('Supplies data');
c.down(v).note( 'Creates');
v.up(c).note('Passes events');
