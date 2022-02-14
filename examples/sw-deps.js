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
x.header('Software data dependency map -- ICT Development 2021');
//x.theme('bluegray');
var ICTComms = x.actor('ICT Comms').note('Manual entry');
var HOOps = x.actor('HO Ops').note('Manual entry');
var SSU = x.actor('HO SSU').note('Manual Entry');
var ICTSupport = x.actor('ICT Support').note('Manual Entry');
var RPU = x.actor('RPU').note('Manual Entry');
var IMC = x.actor('IMC').note('Manual Entry');
var Dev = x.actor('ICT Devs').note('Parsing module development');
var SyncGlobal2 = x.label('SyncGlobal').note('Dublicate entry to unclutter the diagram. See the main SyncGlobal box');

var FleetWave = x.cloud('Fleet Wave').note('Transport tracking system');
var AD = x.cloud('AD').note('Active Directory');

var EarlyWarning = x.component('EarlyWarning').note('SMM Early Warning');
var RATS = x.component('RATS').note('SMM RATS');
var Gazetteer = x.component('Gazetteer').note('SMM Gazetteer');
//var WorkflowEngine = x.component('WorkflowEngine').note('SMM ISBA Workflow Engine');
//var FormEngine = x.component('FormEngine').note('SMM ISBA Form Engine');
//var OrgEngine = x.component('OrgEngine').note('SMM ISBA Asset Query Engine');
var JarvisInventory = x.component('JarvisInventory').note('SMM Jarvis Inventory');
var SyncSnapSchedule = x.component('SyncSnapSchedule').note('Snap Schedule data integration service');
var SnapSchedule = x.cloud('SnapSchedule').note('Scheduling COTS used for Patrol Planning');
var SyncFleetWave = x.component('SyncFleetWave').note('FleetWave data integration service');
var SyncGlobal = x.component('SyncGlobal').note('SMM Data HUB AD Sync');
var BillRetrieval = x.component('BillRetrieval').note('SMM Bill Retrieval');
var PhoneRegistry = x.component('PhoneRegistry').note('SMM Phone Registry');
var CallDeclaration = x.component('CallDeclaration').note('SMM Call Declaration');
var OpsDB = x.component('OpsDB').note('SMM Operations Database');
var ImageServer = x.component('ImageServer').note('Data Hub Photo Aquisition');
var WeaponDB = x.component('WeaponDB').note('SMM Weapon Database');
var EventEngine = x.component('EventEngine').note('SMM DataHub Event Engine');
var ContentServer = x.component('ContentServer').note('SMM Content Server');
var AcronymGlossary = x.component('AcronymGlossary').note('SMM Acronym Glossary');
var RATSFixer = x.component('RATSFixer').note('SMM RATS Fixer');
var WellBeing = x.component('WellBeing').note('Medical (Post Incident Procedures & Health Information) Database');
var DocumentViewer = x.component('DocumentViewer').note('Secure Document Viewer');

SnapSchedule.down(SyncSnapSchedule).note('Requires');
OpsDB.down(ImageServer).note('Requires');
ImageServer.down(ContentServer).note('Requires');
EarlyWarning.down(WeaponDB).note('Uses');
EarlyWarning.down(AcronymGlossary).note('Uses');
EarlyWarning.down(OpsDB).note('Requires');
EarlyWarning.right(Gazetteer).note('Uses');
RATS.down(RATSFixer).note('Requires');
RATSFixer.down(ICTSupport).note('Requires');
//WorkflowEngine.down(FormEngine).note('Requires');
//WorkflowEngine.down(OrgEngine).note('Requires');
//FormEngine.down(ContentServer).note('Requires');
SyncSnapSchedule.down(SyncFleetWave).note('Requires');
SyncFleetWave.down(FleetWave).note('Requires');
SyncSnapSchedule.down(OpsDB).note('Requires');
CallDeclaration.down(BillRetrieval).note('Requires');
CallDeclaration.down(PhoneRegistry).note('Requires');
CallDeclaration.right(SyncGlobal2).note('Requires');
BillRetrieval.down(PhoneRegistry).note('Requires');
BillRetrieval.up(SyncGlobal2).note('Requires');
WellBeing.down(ContentServer).note('Requires');

OpsDB.down(SyncGlobal).note('Requires');
RATS.down(SyncGlobal).note('Requires');
//OrgEngine.down(OpsDB);
JarvisInventory.down(OpsDB).note('Requires');
EventEngine.down(SyncGlobal).note('Requires');
DocumentViewer.down(SyncGlobal).note('Requires');
BillRetrieval.down(ICTComms).note('Requires');
PhoneRegistry.down(ICTComms).note('Requires');
OpsDB.down(HOOps).note('Requires');
ImageServer.down(SSU).note('Requires');
SyncGlobal.down(AD).note('Requires')
AcronymGlossary.down(RPU).note('Requires');
WeaponDB.down(RPU).note('Requires');
DocumentViewer.down(IMC).note('Requires');
Gazetteer.down(IMC).note('Requires');
HOOps.down(EventEngine).note('Uses');
ICTComms.down(EventEngine).note('Uses');
BillRetrieval.down(Dev).note('Requires');
ICTSupport.down(EventEngine).note('Uses');
//SyncSnapSchedule.down(HAGuard).note('Requires');
//SyncFleetWave.down(HAGuard).note('Requires');
//SyncGlobal.down(HAGuard).note('Requires');
