import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { tsx } from '@dojo/framework/widget-core/tsx';

import Footer from '../widgets/footer/Footer';
import Header from '../widgets/header/Header';

import * as css from './Layout.m.css';

export default class Layout extends WidgetBase {
	protected render() {
		return (
			<main classes={[ css.root ]}>
				<Header />
					{this.children}
				<Footer />
			</main>
		);
	}
}
