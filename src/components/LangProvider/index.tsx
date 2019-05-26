import en_US from '@/locales/en-US';
import zh_CN from '@/locales/zh-CN';
import React, { PureComponent } from 'react';
import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import { connect } from 'react-redux';

// 引入多语言环境的数据
addLocaleData([...en, ...zh]);

const messages = {
  en: en_US,
  zh: zh_CN,
};

interface IProps {
  lang: 'zh';
}

class LangProvider extends PureComponent<IProps> {
  render() {
    const { lang, children } = this.props;
    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
        {children}
      </IntlProvider>
    );
  }
}

const mapStateToProps = ({ global }) => ({
  lang: global.lang,
});

export default connect(mapStateToProps)(LangProvider);
