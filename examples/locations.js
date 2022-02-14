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

// Requires FluentUML
UML.boxWidth(17)
var x = UML,
    dpl = x.card('Deployment').note('Active deployment');
    redpl = x.card('Relocation').note('Planned deployment(s) within next 30 days'),
    visit = x.card('Visits').note('Travels/rotations within next 30 days'),
    team = x.card('Team').note('Only one team is possible in SS'),
    access = x.card('Access').note('Location that MM can access')
    locs = x.card('Locations').note('Locations where MM appears')
    u = x.card('smmUnit').note('DataHub field')
    su = x.card('smmSubunit').note('DataHub field')
    pv = x.card('smmOperationalArea').note('DataHub field')
    //cpv = x.card('Planned Visits')
    //cl = x.card('Locations')
    //sss = x.component('SnapSchedule Sync').contains(cu, cpv, cl)
    od = x.folder('OpsDB').contains(dpl,redpl,visit)
    ss = x.folder('SnapSchedule').contains(team,access,locs)
    //dh = x.component('DataHub').contains(u,pv,su)

//x.theme('bluegray')
dpl.down(u).note('Set')
u.down(access).note('Set')
dpl.down(su).note('Set')
su.down(team).note('Set')
dpl.down(pv).note('Add')
redpl.down(pv).note('Add')
visit.down(pv).note('Add')
pv.down(locs).note('Set')
