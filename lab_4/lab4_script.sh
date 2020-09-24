#!/bin/bash
# Authors : Ishika Patel
# Date: 09/22/2020

cp /var/log/syslog ~/home
$ egrep -i error /var/log/syslog | tee error_log_check.txt
$ mail -V
$ echo error_log_check.txt | mail -s 'Lab 4 Mail' ispa0196@colorado.edu
