import { createSelector } from 'reselect'

const selectdirectorydata = (state) => state.directory

export const selectdirectorySelect = createSelector(
    [selectdirectorydata],
    (directory) => (directory.sections)
)
