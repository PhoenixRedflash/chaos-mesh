/**
 * This file was auto-generated by @ui/openapi.
 * Do not make direct changes to the file.
 */

export const actions = [],
  data = [
    {
      field: 'label',
      label: 'containerNames',
      value: [],
      helperText:
        'Optional. ContainerNames indicates list of the name of affected container. If not set, the first container will be injected',
    },
    {
      field: 'ref',
      label: 'failKernRequest',
      children: [
        {
          field: 'ref',
          label: 'callchain',
          multiple: true,
          children: [
            {
              field: 'text',
              label: 'funcname',
              value: '',
              helperText: 'Funcname can be find from kernel source or `/proc/kallsyms`, such as `ext4_mount`',
            },
            {
              field: 'text',
              label: 'parameters',
              value: '',
              helperText:
                'Parameters is used with predicate, for example, if you want to inject slab error in `d_alloc_parallel(struct dentry *parent, const struct qstr *name)` with a special name `bananas`, you need to set it to `struct dentry *parent, const struct qstr *name` otherwise omit it.',
            },
            {
              field: 'text',
              label: 'predicate',
              value: '',
              helperText:
                'Predicate will access the arguments of this Frame, example with Parameters\'s, you can set it to `STRNCMP(name->name, "bananas", 8)` to make inject only with it, or omit it to inject for all d_alloc_parallel call chain.',
            },
          ],
        },
        {
          field: 'number',
          label: 'failtype',
          value: 0,
          helperText:
            "FailType indicates what to fail, can be set to '0' / '1' / '2' If `0`, indicates slab to fail (should_failslab) If `1`, indicates alloc_page to fail (should_fail_alloc_page) If `2`, indicates bio to fail (should_fail_bio) You can read:   1. https://www.kernel.org/doc/html/latest/fault-injection/fault-injection.html   2. http://github.com/iovisor/bcc/blob/master/tools/inject_example.txt to learn more +kubebuilder:validation:Minimum=0",
        },
        {
          field: 'label',
          label: 'headers',
          value: [],
          helperText:
            'Headers indicates the appropriate kernel headers you need. Eg: "linux/mmzone.h", "linux/blkdev.h" and so on',
        },
        {
          field: 'number',
          label: 'probability',
          value: 0,
          helperText:
            'Probability indicates the fails with probability. If you want 1%, please set this field with 1. +kubebuilder:validation:Maximum=100',
        },
        {
          field: 'number',
          label: 'times',
          value: 0,
          helperText: 'Times indicates the max times of fails. +kubebuilder:validation:Minimum=0',
        },
      ],
    },
  ]
