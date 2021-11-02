import React, { Fragment } from 'react';
import { formatMessage, FormattedMessage } from 'umi-plugin-react/locale';
import { Button, Icon, Card } from 'antd';
import Result from './Result';
import { GridContent } from '@ant-design/pro-layout';
import styles from './index.less';

const extra = (
  <Fragment>
    <div
      style={{
        fontSize: 16,
        color: 'rgba(0, 0, 0, 0.85)',
        fontWeight: 500,
        marginBottom: 16,
      }}
    >
      <FormattedMessage
        id="result-fail.error.hint-title"
        defaultMessage="The content you submitted has the following error:"
      />
    </div>
    <div style={{ marginBottom: 16 }}>
      <Icon style={{ marginRight: 8 }} className={styles.error_icon} type="close-circle-o" />
      <FormattedMessage
        id="result-fail.error.hint-text1"
        defaultMessage="Your account has been frozen"
      />
      <a style={{ marginLeft: 16 }}>
        <FormattedMessage id="result-fail.error.hint-btn1" defaultMessage="Thaw immediately" />
        <Icon type="right" />
      </a>
    </div>
    <div>
      <Icon
        style={{ color: '#f5222d', marginRight: 8 }}
        className={styles.error_icon}
        type="close-circle-o"
      />
      <FormattedMessage
        id="result-fail.error.hint-text2"
        defaultMessage="Your account is not yet eligible to apply"
      />
      <a style={{ marginLeft: 16 }}>
        <FormattedMessage id="result-fail.error.hint-btn2" defaultMessage="Upgrade immediately" />
        <Icon type="right" />
      </a>
    </div>
  </Fragment>
);

const actions = (
  <Button type="primary">
    <FormattedMessage id="result-fail.error.btn-text" defaultMessage="Return to modify" />
  </Button>
);

export default () => (
  <GridContent>
    <Card bordered={false}>
      <Result
        type="error"
        title={formatMessage({ id: 'result-fail.error.title' })}
        description={formatMessage({ id: 'result-fail.error.description' })}
        extra={extra}
        actions={actions}
        style={{ marginTop: 48, marginBottom: 16 }}
      />
    </Card>
  </GridContent>
);
