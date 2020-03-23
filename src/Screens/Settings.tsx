import React, { Component } from 'react';
import ModalDropdown from 'react-native-modal-dropdown';
import { observer } from 'mobx-react';
import {
  View,
} from 'react-native';
import {
  Content,
  ListItem,
  List,
  Body,
  Right,
  Text,
  Icon,
  Switch,
} from 'native-base';

import { RootStore } from 'src/Store';

import Localize from 'src/Utils/Localize';

import {
  sg,
} from 'src/Styles';

const { settings } = RootStore;

@observer
class Settings extends Component {
  renderLanguage() {
    const { trans, locale } = settings;

    const locales = Localize.getLocales();
    const localesLength = locales.length;
    const localeIndex = locales.indexOf(locale);
    const height = localesLength * 52;


    return (
      this.renderListItem(
        trans('common.ok'),
        <ModalDropdown
          defaultIndex={localeIndex}
          options={locales}
          dropdownTextStyle={[sg.fS15, sg.m5, sg.noBorderB]}
          onSelect={(index: number, key: string) => {
            settings.setLocale(key);
          }}
          dropdownStyle={[sg.border, { height }]}
          renderSeparator={(sectionID: string, rowID: string) => {
            const showSeparator = (parseInt(rowID, 10) + 1) !== localesLength;

            if (!showSeparator) {
              return null;
            }

            return (
              <View
                style={[sg.heightHair, sg.bgGray]}
                key={rowID}
              />
            );
          }}
        >
          <View style={sg.row}>
            <Text>{locale}</Text>
            <Icon name="md-arrow-dropdown" style={[sg.colorBlack, sg.mL5]} />
          </View>
        </ModalDropdown>,
      )
    );
  }

  renderSwitchLockScreen() {
    const { trans, isLockScreen, setLockScreen } = settings;

    return (
      this.renderListItem(
        trans('settings.lockScreen'),
        <Switch
          value={isLockScreen}
          onValueChange={() => setLockScreen(!isLockScreen)}
        />,
      )
    );
  }

  renderListItem(title: string, right: React.ReactElement) {
    return (
      <ListItem style={sg.mL0}>
        <Body>
          <Text>{title}</Text>
        </Body>
        <Right>
          {right}
        </Right>
      </ListItem>
    );
  }

  render() {
    return (
      <Content>
        <List>
          <ListItem itemDivider />
          {this.renderLanguage()}

          <ListItem itemDivider />
          {this.renderSwitchLockScreen()}

        </List>
      </Content>
    );
  }
}

export default Settings;
