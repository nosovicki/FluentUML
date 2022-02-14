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

var u = UML.title('Knowledge Graph Hypothesis').boxWidth(20)//.theme('bluegray')
u.set('left to right direction')
var d = u.component('Deliberate behavior');
var pp = u.frame('Problem solving hypothesis by Herbert Simon')
var yy = u.component('Symbol system')
var tt = u.component('Table of connections').note('Associates each kind of difference between existing and desired situations with those actions that are relevant to reducing that difference.')
var n = u.note('Proved synthesizable only for a narrow set of domains.')
tt.down(n)
var mea = u.component('Means-ends Analysis').note('Problem solving technique that exploits factorization of differences and searches for alternative action sequences')
pp.contains(yy,tt,n,mea)
var kg = u.component('Knowledge Graph').note('Approximates certain brain functions')
kg.down(tt).note('Substitutes')
yy.down(mea).note('Enables')
tt.down(mea).note('Enables')
mea.down(d).note('Constitutes')
