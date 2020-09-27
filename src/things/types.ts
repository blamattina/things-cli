export interface CheckListJson {
  type: 'checklist-item';
  title: string;
  completed?: boolean;
}

export interface TodoJson {
  type: 'to-do';
  attributes: {
    'checklist-items'?: CheckListJson[];
    deadline?: string;
    list?: string;
    tags?: string[];
    title: string;
    when?: string;
    notes?: string;
  };
}

export interface HeadingJson {
  type: 'heading';
  atttributes: {
    title: string;
  };
}

export interface ProjectJson {
  type: 'project';
  attributes: {
    title: string;
    notes?: string;
    items: Array<TodoJson | HeadingJson>;
  };
}
