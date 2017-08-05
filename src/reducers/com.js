import { objectNoId } from '../reducers/object'

export const COM_INITIALSTATE = {
    state: '',
    serverConnected: false,
    machineConnected: false,
    playing: false,
    paused: false,
    m0: false,
    firmware: '',
    firmwareVersion: '',
    workOffset: [0, 0, 0, 0],
    wpos: [0, 0, 0],

    comInterfaces: [],
    comPorts: []
}

export function com(state = COM_INITIALSTATE, action) {
    state = objectNoId('com', COM_INITIALSTATE)(state, action);
    return state;
}