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
x.boxWidth(28)
var dev = x.frame('Vendor Cycle'),
    usr = x.frame('Software Adopter Cycle'),
    an = x.rectangle('Analysis').width(18).note('Creating formal or informal software requirements'),
    de = an.copy('Design').note('Creating software specifications and code'),
    ct = an.copy('Implementation').note('Includes testing and debugging. Outputs executable code'),
    co = an.copy('Configuration').note('Changing software parameters to improve its output'),
    ro = an.copy('Rollout').note('Implementing organizational change'),
    us = an.copy('Usage').note('Realization of the benefits & accumulation of experience');

dev.contains(an,de,ct)
usr.contains(co,ro,us)

an.up(de).note('Requirements')
de.right(ct)
ct.down(an)
ct.right(co).note('Release')

co.down(ro)
ro.left(us)
us.up(co).note('Requirements')
us.left(an).note('Feedback')
