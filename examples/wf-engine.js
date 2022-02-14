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
x.theme('bluegray');
x.footer('Workflow engine components -- SMM ICT Development 2021');
x.set('skinparam actorStyle awesome');
var Users = x.actor('End Users');
var Apps = x.rectangle('Future Applications');
var WorkflowEngine = x.card('WorkflowEngine').note('Provides authoring UI and serves workflows');
var FormEngine = x.card('FormEngine').note('Provides authoring UI and serves dynamic HTML forms');
var OrgEngine = x.card('OrgEngine').note('Serves queries to the org. structure');
var AD = x.database('DataHub').note('SMM Data HUB');
var ContentServer = x.rectangle('ContentServer').note('Serves linked content');

Users.right(Apps);
Users.down(WorkflowEngine);
Users.down(OrgEngine);
Apps.down(FormEngine);
//Apps.down(WorkflowEngine);
WorkflowEngine.left(OrgEngine);
WorkflowEngine.right(FormEngine);
FormEngine.down(ContentServer);
OrgEngine.down(AD);
