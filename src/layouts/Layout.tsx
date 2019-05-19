import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { tsx } from '@dojo/framework/widget-core/tsx';

import Footer from '../widgets/footer/Footer';

import * as css from './Layout.m.css';

export default class Layout extends WidgetBase {
	protected render() {
		return (
			<div classes={[ css.root ]}>
				{this.children}
				<Footer />
			</div>
		);
	}
}
