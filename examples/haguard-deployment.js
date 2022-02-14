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

UML.boxWidth(20)
var x = UML,
    db = x.node('RDBMS').type('Oracle')
    uu = x.actor('User');
    j = x.component('Scheduled Job').note('Pings the local HAGuard instance').type('Oracle'),
    t = x.database('DB').note('Application configuration').type('Oracle'),
    hg2 = x.component('127.0.0.1 instance').note('Runs scheduled jobs only').type('HAGuard'),
    hg1 = hg2.copy('Networked instance').note('Provides user interface only').type('HAGuard'),
    iis = x.node('Web Server').type('IIS')

x.title('Deployment Diagram')
x.theme('plain')
iis.contains(hg2, hg1)
db.contains(j,t)
hg1.align(hg2)
t.align(j)
hg1.left(t)
hg2.up(t)
j.right(hg2).note('Uses').end('Port 8080')
uu.left(hg1).note('Uses').tip(0).end('Port 443')
hg2.connect(hg2).note('Runs jobs').tip(0).width(5)
