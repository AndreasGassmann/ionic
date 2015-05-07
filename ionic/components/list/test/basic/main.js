import {Component, View, bootstrap} from 'angular2/angular2';
import {Content} from 'ionic/components/content/content';
import {List} from 'ionic/components/list/list';
import {Item} from 'ionic/components/item/item';


@Component({ selector: '[ion-app]' })
@View({
  templateUrl: 'main.html',
  directives: [Content, List, Item]
})
class IonicApp {
  constructor() {
    console.log('IonicApp Start')
  }
}

bootstrap(IonicApp)
