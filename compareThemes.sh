#! /bin/bash
# Copyright 2022 The FluentUML Authors
#
# Licensed under the EUPL, Version 1.1 or - as soon they
# will be approved by the European Commission - subsequent
# versions of the EUPL (the "Licence");
# You may not use this work except in compliance with the Licence.
# You may obtain a copy of the Licence at:
#
# https://joinup.ec.europa.eu/collection/eupl/eupl-text-11-12
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the Licence is distributed on an "AS IS" basis,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the Licence for the specific language governing permissions and
# limitations under the Licence.

for t in amiga black-knight bluegray blueprint cerulean cerulean-outline crt-amber crt-green cyborg cyborg-outline hacker lightgray materia materia-outline metal mimeograph minty plain resume-light sandstone silver sketchy sketchy-outline spacelab superhero superhero-outline united
do
	sed -i "s/\.theme('.*$/.theme('$t');/" $1
	grep theme $1
	cygstart index.html
	sleep 3
done
