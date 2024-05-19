import { useEffect } from 'react';
import { Dimensions } from 'react-native';

import { useToast } from '@services';

import { $shadowProps } from '@theme';

import { Box, BoxProps } from '../Box/Box';
import { Icon } from '../Icon/Icon';
import { Text } from '../Text/Text';

const MAX_WIDTH = Dimensions.get('screen').width * 0.9;

const $boxStyle: BoxProps = {
    backgroundColor: 'background',
    position: 'absolute',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 's16',
    borderRadius: 's16',
    opacity: 0.95,
    maxWidth: MAX_WIDTH,
    style: {...$shadowProps},
};

export function Toast() {
    const {toast, hiddenToast} = useToast();

  useEffect(() => {
    if (toast) {
      setTimeout(() => {
        hiddenToast();
      }, 2000);
    }
  }, [hiddenToast, toast]);

  if (!toast) {
    return null;
  }

    return (
        <Box top={100} {...$boxStyle}>
            <Icon name="checkRound" color="success" />
            <Text style={{flexShrink: 1}} ml="s16" preset="paragraphMedium" bold>{toast?.message}</Text>
        </Box>
    );
}
