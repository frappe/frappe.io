# Where Do I Find Standard Print Formats

Standard Print formats are **auto generated** from the layout of the DocType. You can customize the standard format by


#### 1. Customizing Standard Print
Go to Setup > Customize > Customize Form View and you can:

1. Re-arranging fields by dragging and dropping
1. Add static elements by adding **HTML** type fields and adding your HTML in **Options**
1. Hiding fields by setting the **Print Hide** property

#### 2. Creating new layouts based on Print Formats

As there are not templates that are generated for standard Print Formats, you will have to create new templates from
scratch using the [Jinja Templating Language](http://jinja.pocoo.org/) via Setup > Printing and Branding > Print Format

1. [See Print Format help](https://erpnext.com/user-guide/customize-erpnext/print-format)
1. You can use the [Bootstrap CSS framework](http://getbootstrap.com) to layout your print formats


> Tip: You can import [Standard Template macros](https://github.com/frappe/frappe/blob/develop/frappe/templates/print_formats/standard_macros.html) for building your print formats


Example, adding the standard header:

```
    {%- from "templates/print_formats/standard_macros.html" import add_header -%}
    {{ add_header() }}
```
