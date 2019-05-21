import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { tsx } from '@dojo/framework/widget-core/tsx';

import Footer from '../widgets/footer/Footer';
import Header from '../widgets/header/Header';

import * as css from './Layout.m.css';

import { SiteConfig } from '../interfaces';

export default class Layout extends WidgetBase<SiteConfig> {
	protected render() {
		const { title, author, footerLinks } = this.properties;
		return (
			<main classes={[ css.root ]}>
				<Header title={title} />
				{this.children}
				<Footer {...{ author, footerLinks }} />
			</main>
		);
	}
}
