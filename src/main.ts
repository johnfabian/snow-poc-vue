import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";


//#region PrimeVue
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import ButtonGroup from 'primevue/buttongroup'
import Card from 'primevue/card'
import Chart from 'primevue/chart'
import ConfirmDialog from 'primevue/confirmdialog'
import ConfirmPopup from 'primevue/confirmpopup'
import ConfirmationService from 'primevue/confirmationservice'
import Dialog from 'primevue/dialog'
import DialogService from 'primevue/dialogservice'
import Fieldset from 'primevue/fieldset'
import IconField from 'primevue/iconfield'
import InputGroup from 'primevue/inputgroup'
import InputGroupAddon from 'primevue/inputgroupaddon'
import InputIcon from 'primevue/inputicon'
import InputSwitch from 'primevue/inputswitch'
import InputText from 'primevue/inputtext'
import InputMask from 'primevue/inputmask'
import InputNumber from 'primevue/inputnumber'
import Menu from 'primevue/menu'
import Message from 'primevue/message'
import Panel from 'primevue/panel'
import PanelMenu from 'primevue/panelmenu'
import ProgressBar from 'primevue/progressbar'
import ProgressSpinner from 'primevue/progressspinner'
import Ripple from 'primevue/ripple'
import StyleClass from 'primevue/styleclass'
import TabMenu from 'primevue/tabmenu'
import Textarea from 'primevue/textarea'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
import Toolbar from 'primevue/toolbar'
import ToggleButton from 'primevue/togglebutton'
import Tooltip from 'primevue/tooltip'
import TriStateCheckbox from 'primevue/tristatecheckbox'
import VirtualScroller from 'primevue/virtualscroller'
//#endregion

import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import '@/assets/styles.css'

const app = createApp(App);
app.use(PrimeVue, { ripple: false })
app.use(ToastService)
app.use(DialogService)
app.use(ConfirmationService)
app.directive('tooltip', Tooltip)
app.directive('ripple', Ripple)
app.directive('styleclass', StyleClass)
//#region Primevue
app.component('Button', Button)
app.component('ButtonGroup', ButtonGroup)
app.component('Card', Card)
app.component('Chart', Chart)
app.component('DataView', DataView)
app.component('Dialog', Dialog)
app.component('Fieldset', Fieldset)
app.component('IconField', IconField)
app.component('Image', Image)
app.component('InputGroup', InputGroup)
app.component('InputGroupAddon', InputGroupAddon)
app.component('InputIcon', InputIcon)
app.component('InputMask', InputMask)
app.component('InputNumber', InputNumber)
app.component('InputSwitch', InputSwitch)
app.component('InputText', InputText)
app.component('Menu', Menu)
app.component('Message', Message)
app.component('Panel', Panel)
app.component('PanelMenu', PanelMenu)
app.component('ProgressBar', ProgressBar)
app.component('ProgressSpinner', ProgressSpinner)
app.component('Toast', Toast)
app.component('Toolbar', Toolbar)
app.component('ToggleButton', ToggleButton)
app.component('TriStateCheckbox', TriStateCheckbox)
app.component('VirtualScroller', VirtualScroller)
//#endregion

app.use(router);
app.mount("#app");
