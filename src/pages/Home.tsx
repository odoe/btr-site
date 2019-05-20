import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { tsx } from '@dojo/framework/widget-core/tsx';
import Link from '@dojo/framework/routing/Link';

import Content from '../widgets/content/Content';

// import * as css from './Home.m.css';

export default class Home extends WidgetBase {
	protected render() {
		return (
			<Content>
				Welcome to Dojo BTR Blog!
				<p>
					Just go straight to the blog <Link to="blog">here</Link>, and stop messing around.
				</p>
			</Content>
		);
	}
}
