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

var u = UML
// u.showNodes()
// exit()
u.title('УНИВЕРСАЛЬНЫЙ АЛГОРИТМ РЕШЕНИЯ ПРОБЛЕМ')
u.boxWidth(6)
u.set('skinparam defaultTextAlignment center')
u.set('skinparam BoxPadding 40')
//u.set('skinparam linetype ortho')
var q = ['ХРЕНЬ РАБОТАЕТ?', 'ТЫ ЧТО-НИБУДЬ ДЕЛАЛ?', 'ТЕБЕ ПОПАДЕТ?', 'КТО-НИБУДЬ ВИДЕЛ?', 'ПРОКАТИТ?'].map(u.rectangle, u)
var s = ["НИЧЕГО НЕ ТРОГАЙ", 'ПРИДУМАЙ ОТМАЗКУ', 'НЕ ПАРЬСЯ', 'ЗАЧИСТИ СЛЕДЫ', 'ПРОБЛЕМ НЕТ'].map(u.rectangle, u)
q[0].note('---').width(10)
s[4].width(10).note('----')
q[4].width(12).form('storage')

q[1].form('storage')

q[0].down(s[0]).note('ДА')
q[2].right(s[1]).note('ДА')
q[3].down(s[1]).note('ДА')
q[4].down(s[4]).note('ДА')

q[0].right(q[1]).note('НЕТ')
q[1].down(q[2]).note('НЕТ')
q[2].down(s[2]).note('НЕТ')
q[3].down(s[3]).note('НЕТ')
q[4].down(s[1]).length(1).note('НЕТ')

s[1].down(q[4]).note(' ')
q[1].right(q[3]).note('ДА')
s[0].down(s[4])
s[2].down(s[4])
s[3].right(q[4])

