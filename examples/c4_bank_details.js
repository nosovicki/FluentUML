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

UML.maxBoxSize = 27;
UML.mono()

var bank = UML.box('Existing', 'component', 'Mainframe Banking System', 'Stores all of the core banking information about customers, accounts, transactions, etc.');
//var www = UML.box('Angular', 'component', 'Single-Page Web App', 'Provides all of the Internet banking functionality to customers via their web browser.')
var w = UML.box('Angular', 'component', 'Single-Page Web App', 'Provides all of the Internet banking functionality to customers via their web browser.')
var m = UML.box('Xamarin', 'component', 'Mobile App', ' Provides a limited subset of the Internet banking functionality to customers via therir mobile device.');
var DB = UML.box('Oracle', 'database', 'DB', 'Stores user registration information, hashed authentication credentials, access logs, etc.', 15);
var api =UML.box('Spring MVC', 'rectangle',  "API Application")
var si = UML.box('Conroller', 'component', 'Sign In Controller', 'Allows users to sign in to the Internet Banking System');
var  sc = UML.box('Bean', 'component', 'Security Component', 'Provides functionality related to signing in, changing passwords, etc.');
var as = UML.box('Conroller', 'component', 'Accounts Summary Controller', 'Provides customers with a summary of their bank acounts.');
var f = UML.box('Bean', 'component', 'Mainframe Banking system Facade', 'A facade onto the mainframe banking system.');
api.contains(si, as, sc, f);
w.connect(as, 2, 'Uses').connect(si, 2, 'Uses');
m.connect(si, 2, 'Uses').connect(as, 2, 'Uses');
si.chain(sc, 2, 'Uses').connect(DB, 2, 'Reads from and writes to');
as.chain(f, 2, 'Uses').chain(bank, 1, 'Uses');
