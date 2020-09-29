import { TodoJson, ChecklistJson } from './json';
import { filterObject } from '../util/filterObject';

const buildChecklistItem = function (title: string): ChecklistJson {
  return {
    type: 'checklist-item',
    attributes: {
      title,
    },
  };
};

export const buildTodo = function ({
  title,
  list,
  when,
  checklistItems = [],
}: {
  title: string;
  list?: string;
  when?: string;
  checklistItems?: Array<string>;
}): TodoJson {
  return {
    type: 'to-do',
    attributes: {
      title,
      ...filterObject({
        list,
        when,
        'checklist-items': checklistItems.map(buildChecklistItem),
      }),
    },
  };
};
