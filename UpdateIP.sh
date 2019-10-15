#!/bin/bash

IP="$(curl --silent --show-error --fail ifconfig.me)"
FILE="ServerIP.txt"

if [ "${IP}" = "$(cat ServerIP.txt)" ];
then
	echo "IP has not changed."
else
	echo "Updating IP..."
	echo "${IP}" > "${FILE}"
	git add "${FILE}"
	git commit -m "Updated Server IP address."
	git push
	echo "Update successful."
fi