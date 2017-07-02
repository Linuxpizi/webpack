import _ from 'lodash'
import moment from 'moment'

function component() {

    var element = document.createElement("div");

    element.innerHTML = _.join(["hello","world","hello","golang and vue"]," ");

    return element;

}
console.log(moment().format())

document.body.appendChild(component());
/*
* UglifyJs
* */
