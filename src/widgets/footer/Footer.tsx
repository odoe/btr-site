import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { tsx } from '@dojo/framework/widget-core/tsx';
import has from '@dojo/framework/has/has';

import * as css from './Footer.m.css';

export default class Footer extends WidgetBase {
	protected render() {
		const d = new Date();
		const buildTime = has('build-time-render') ? new Intl.DateTimeFormat('en-US').format(d) : null;
		const year = has('build-time-render') ? d.getFullYear().toString() : null;
		return (
			<footer key="footer" classes={[ css.root ]}>
				&copy; {year} odoenet. <br />
				<a key="odoe" href="https://github.com/odoe/btr-site" target="_blank">
					GitHub
				</a>
				<br />
				<a key="dojo" href="https://dojo.io/" target="_blank">
					Built with Dojo
				</a>
				<br />
				<span classes={[ css.details ]} key="footer">
					Last build: {buildTime}
				</span>
			</footer>
		);
	}
}
