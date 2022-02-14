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

var x = UML;
x.set('left to right direction')
x.header('Software data dependency map -- Development 2021');
x.theme('bluegray');

var FleetWave = x.rectangle('Fleet Wave').note('Transport tracking system');
var AD = x.rectangle('Org AD').note('Active Directory');

var Egis = x.rectangle('Arc GIS').note('SMM geographic information system');
var SyncSnapSchedule = x.card('SyncSnapSchedule').note('Snap Schedule data integration service');
var SnapSchedule = x.rectangle('SnapSchedule').note('Scheduling COTS');
var SyncFleetWave = x.card('SyncFleetWave').note('FleetWave data integration service');
var SyncGlobal = x.card('SyncGlobal').note('SMM Data HUB AD Sync');
var OpsDB = x.card('OpsDB').note('SMM Operations Database');

Egis.left(SnapSchedule).note('Uses');
SnapSchedule.down(SyncSnapSchedule).note('Uses');
SyncSnapSchedule.down(SyncFleetWave).note('Uses');
SyncFleetWave.down(FleetWave).note('Uses');
SyncSnapSchedule.right(OpsDB).note('Uses');

OpsDB.down(SyncGlobal).note('Uses');
SyncGlobal.down(AD).note('Uses')
