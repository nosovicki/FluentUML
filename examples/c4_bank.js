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

// well, here we need to describe _why_ we made those decisions.
// For exmple, our line of thought could be the following one:
//
// It was decided we create an <<Internet>> system where customers <<manage their accounts>>.
// We talked with experts, and they recommended the following technology matrix:
// 	<<[
//	desktop -> <<Angular.js>> -- because it offers fastest "to market" time
//	mobile -> <<Xamarin>> -- because we have experience working with it
//	e-mail -> <<Existing MS Exchange server)>>
//	]>>
//
// Recommended data matrix of what and where to store:
// 	<<[
//	access credentials -> <<Local DB>> -- see below why
//	access logs -> <<Local DB>> 		-- '' --
//	rest of the data -> access via our existing enterprise API
//	]>>
//
// As we <<cannot allow users to create records in our existing storage XYZ>>, this system <<will use its own database>>
//
// System composition:
//
// Both www and mobile front-ends will talk with the single backend. -- for reuse
// Communication to all banking systems shall go via this backend. -- for security reasons
//
//
// VERBAL DESCRIPTION
//
// Customer with a personal bank account can access three applications: the main bank site that serves static content, a web-application that provides internet banking, and a mobile app that provides a subset of the internet banking functionality. Both web and mobile applications talk to the same JSON/HTTPS backend. The API server performs operations on behalf of a user in the main banking system. To store user credentials and access logs, it uses its own database. To send e-mails, it uses the bank's e-mail server.

UML.boxWidth(20);
UML.set('skinparam actorStyle awesome');
UML.set('skinparam componentBackgroundColor<<Existing>> #FFF');

var y = UML.component('Web Application').type('Spring MVC').note('Delivers the static content and the Internet banking single page application.');
var c = UML.actor("Personal Banking Customer").type('Person').note('A customer of the Bank with personal bank accounts').divider('===');
var mail = UML.component("E-Mail System").type('Existing').note('The internal Microsoft Exchange e-mail system');
var bank = UML.component("Mainframe Banking System").type('Existing').note('Stores all of the core banking information about customers, accounts, transactions, etc.');
var w = UML.component("Single-Page Web App").type('Angular').note('Provides all of the Internet banking functionality to customers via their web browser.');
var m = UML.component("Mobile App").type('Xamarin').note('Provides a limited subset of the Internet banking functionality to customers via therir mobile device.');
var api = UML.component("API Application").type('Spring MVC').note('Provides Internet banking functionality via a JSON/HTTPS API.');
var db = UML.database("DB").type('Oracle').note('Stores user credentials, access logs, etc.');

UML.package("Internet Banking System").type('Spring MVC').contains(w,m,api,db,y)
c.uses(y).down().end('HTTPS')
y.connect(w).right().note('Delivers to the custoomer\'s web browser')
c.uses(m).down()
c.uses(w).down()
w.uses(api).down()
m.uses(api).down()
api.uses(db).left().end('SQL')
api.uses(mail).up().end('SMTP')
api.uses(bank).end('RPC')
mail.connect(c).note('Sends e-mails to')
UML.together(mail, bank); 
mail.align(bank)
//UML.together(y, db)
