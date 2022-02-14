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

UML.boxWidth(17)
var x = UML,
    uu = x.actor('Administrator');
    j = x.component('Scheduled Job').note('Calls HAGuard URL').type('Oracle'),
    hg = x.component('HAGuard').note('Calls service URLs').type('.NET'),
    url = x.collections('URLs').note('Any number of services'),

x.set('skinparam actorstyle awesome')
x.theme('plain')
j.right(hg).note('Wake-up ping every N minutes')
hg.right(url).note('Wake-up ping every M minutes')
uu.up(hg).note('Configures')
hg.down(uu).note('Notifies')
