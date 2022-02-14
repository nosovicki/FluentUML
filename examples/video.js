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
UML.set('skinparam ranksep 40')

var cm = UML.box('', 'rectangle', "Camera Management");
var crdb = UML.box('', 'database', 'Camera Registry DB', 'Holds camera position and status history')
var ccui = UML.box('', 'component', "Camera Control UI", 'Updates camera registry DB')
cm.contains(crdb, ccui);
var od = UML.box('', 'rectangle', "Object Detection");
var mt = UML.box('', 'component', "Model Training", 'Creates highly relevant Object detection models');
od.contains(mt);
var c = UML.box('', 'node', "Camera")
var os = UML.box('', 'component', "Onboard Software", 'Adds content analytics and serves as camera adapter')
var vsbe = UML.box('', 'component', "Video Storage Backend", 'Provides API to store multistream and get it back by time and camera')
var vr = UML.box('', 'rectangle', "Video Recording\\n").contains(c,os,vsbe)
var vaui = UML.box('', 'component', "Video Annotation UI", 'For putting records into Event DB');
var edb = UML.box('', 'database', 'Event DB', 'Holds tags and pointers to the video stream')
var vrui = UML.box('', 'component', "Video Retrieval UI", 'Queries Event DB and retrieves from Video');
var vm = UML.box('', 'rectangle','Video Management').contains(vaui,edb,vrui);

crdb.chain(ccui, 2).connect(os, 1).connect(mt, 2);
c.chain(os, 2).chain(vsbe, 2).chain(vrui, 1);
vaui.chain(edb, 2).chain(vrui);
