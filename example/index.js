/* Example package for griphitor */
const packagename = "Example package Griphitor";

/* Include griphitor functions */
require(`$appdir/main/package`);

/* Variables */
const notifbody = {
  title: "Griphitor example package",
  message: "Hello from griphitor!"
};

/* Notification in griphitor */
gnotif(notifbody);

/* Notification in system */
/*
Note: User may have do not discturb mode on,
which wont show them the notification,
use gnotif after a snotif call to ensure they recive that notification
*/
snotif(notifbody);
gnotif(notifbody);
