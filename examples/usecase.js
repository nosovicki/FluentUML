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
x.set('left to right direction');
x.set('skinparam actorStyle awesome');
x.boxWidth(10)
var usr = x.actor('User'),
    au = usr.copy('Authenticated User'),
    spec = au.copy('Employee'),
    adm = spec.copy('Administrator');


adm.extends(spec).left().note('Includes')
	.descend(au)
	.descend(usr);
var li = x.usecase('Log in'),
    lo = x.usecase('Log out'),
    r = x.usecase('Register')
x.component('Authentication').contains(r,li,lo)
usr.connect(li)
usr.connect(x.usecase('View Portfolio'))
usr.connect(r)
var cs = x.usecase('Create session'),
    ms = x.usecase('Modify session'),
    ss = x.usecase('Manage sessions')
x.component('Scheduling').contains(cs,ms,ss)
au.connect(lo)
.fork(x.usecase('Request appointment'))
.fork(x.usecase('Manage profile'))
	.descend(x.usecase('Modify info'))
	.fork(ss);
spec.connect(x.usecase('Manage calendar'))
 	.descend(cs)
 	.fork(ms)
 		.descend(x.usecase('Assign specialist'))
 		.fork(x.usecase('Modify status'));
adm.connect(x.usecase('Manage users'))
	.descend(x.usecase('Modify user'))
	.fork(x.usecase('Delete user'))
