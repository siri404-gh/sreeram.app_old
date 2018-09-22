import React from 'react';

/**
 *
 *
 * @export
 * @class Adsense
 * @extends {React.Component}
 */
export default class Adsense extends React.Component {
  /**
   *
   *
   * @memberof Adsense
   */
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  /**
   *
   *
   * @return {Component}
   * @memberof Adsense
   */
  render() {
    return <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client={`ca-pub-${this.props.pubID}`}
      data-ad-slot={this.props.adSlot}
      data-ad-format="auto"
      data-full-width-responsive="true" />;
  }
}
