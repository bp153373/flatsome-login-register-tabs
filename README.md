# flatsome-login-register-tabs

Flatsome -> Advanced -> Global Settings:
Paste the full content of "script-register.js" in the field of Footer Scripts

Flatsome -> Advanced -> Custom CSS:
Paste the full content of "register-tabs.css" in the field of All Screens

Changing tab text in script:<br />
  `var tabs =$('<div class="row login-tabs"><div class="col large-6 login active-tab"><a href="#login"><h3>`<b>[LOGIN-TEXT]</b>`</h3></a></div><div class="col large-6 register inactive-tab"><a href="#register"><h3>`<b>[REGISTER-TEXT]</b>`</h3></a></div></div>');`
<br /><br />
Changing colors of active/inactive tabs:<br />
`.active-tab{
	background: #fff;
}
.inactive-tab{
	background: #ddd;
}`
<br/><br />
Changing border tabs:<br />
`.login-tabs .col{
	text-align: center;
	border: 2px solid #555;
}`
