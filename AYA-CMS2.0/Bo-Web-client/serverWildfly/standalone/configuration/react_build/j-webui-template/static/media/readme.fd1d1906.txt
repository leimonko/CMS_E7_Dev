 <ModalConfirm
              stateData={{
                form: {
                  tab_form: {
                    data: [
                      {
                        title: "Thiết lập thông số",
                        id: "column1",
                      },
                      {
                        title: "JSON",
                        id: "column2",
                      },
                    ],
                    abs_select: this.abs_selectTabForm,
                  },
                  column1: {
                    tab_form: {
                      data: [
                        {
                          title: "Mặc định",
                          id: "column1_child1",
                        },
                        {
                          title: "Cấu hình",
                          id: "column1_child2",
                        },
                        {
                          title: "Quyền",
                          id: "column1_child3",
                        },
                        {
                          title: "Tính chất",
                          id: "column1_child4",
                        },
                        {
                          title: "Validate",
                          id: "column1_child5",
                        },
                        {
                          title: "Ngôn ngữ",
                          id: "column1_child6",
                        },
                      ],
                      abs_select: this.abs_selectTabForm,
                    },
                  },
                  column2: {
                    list_text_area: [
                      {
                        dataFull: {
                          config: {
                            default: {
                              helper: "test",
                              title: "Actions", // title của uTextArea
                              class: "col-md-12", // số cột hiển thị trên view
                              rows: 10, // độ rộng của textarea
                             
                            },
                            cmd: {
                              isHelper: true,
                              disable: false, // true/false cho phép nhập textarea hay không
                              visible: true, // true/false cho phép hiển thị textarea hay không
                              error: {
                              message: "", // thông báo lỗi
                              type: "", // kiểu định dạng lỗi: danger, info, success, gray, default
                            },
                            },
                            
                          },
                         
                          value: "test", // nhận vào các kiểu string/number.
                          abs_Change: this.testTextArea,
                        },
                      },
                      {
                        dataFull: {
                          config: {
                            default: {
                              helper: "test",
                              title: "Actions", // title của uTextArea
                              class: "col-md-12", // số cột hiển thị trên view
                              rows: 10, // độ rộng của textarea
                              code_form_component: "", // xác định xem đang dùng textarea nào
                            },
                            cmd: {
                              isHelper: true,
                              disable: false, // true/false cho phép nhập textarea hay không
                              visible: true, // true/false cho phép hiển thị textarea hay không
                            },
                            error: {
                              message: "", // thông báo lỗi
                              type: "", // kiểu định dạng lỗi: danger, info, success, gray, default
                            },
                          },
                          data: [], // ở uInput không dùng data
                          value: "test", // nhận vào các kiểu string/number.
                          abs_Change: this.testTextArea,
                        },
                      },
                      {
                        dataFull: {
                          config: {
                            default: {
                              helper: "test",
                              title: "Actions", // title của uTextArea
                              class: "col-md-12", // số cột hiển thị trên view
                              rows: 10, // độ rộng của textarea
                              code_form_component: "", // xác định xem đang dùng textarea nào
                            },
                            cmd: {
                              isHelper: true,
                              disable: false, // true/false cho phép nhập textarea hay không
                              visible: true, // true/false cho phép hiển thị textarea hay không
                            },
                            error: {
                              message: "", // thông báo lỗi
                              type: "", // kiểu định dạng lỗi: danger, info, success, gray, default
                            },
                          },
                          data: [], // ở uInput không dùng data
                          value: "test", // nhận vào các kiểu string/number.
                          abs_Change: this.testTextArea,
                        },
                      },
                      {
                        dataFull: {
                          config: {
                            default: {
                              helper: "test",
                              title: "Actions", // title của uTextArea
                              class: "col-md-12", // số cột hiển thị trên view
                              rows: 10, // độ rộng của textarea
                              code_form_component: "", // xác định xem đang dùng textarea nào
                            },
                            cmd: {
                              isHelper: true,
                              disable: false, // true/false cho phép nhập textarea hay không
                              visible: true, // true/false cho phép hiển thị textarea hay không
                            },
                            error: {
                              message: "", // thông báo lỗi
                              type: "", // kiểu định dạng lỗi: danger, info, success, gray, default
                            },
                          },
                          data: [], // ở uInput không dùng data
                          value: "test", // nhận vào các kiểu string/number.
                          abs_Change: this.testTextArea,
                        },
                      },
                    ],
                  },
                  column1_child2: {
                    collection_method: {
                      dataFull: {
                        config: {
                          default: {
                            title: "Class", // title của uSelectItem
                            class: "col-md-12 ", // hiển thị chiều dài của uSelectItem
                            required: false, //true/false hiển thị dấu * phân biệt bắt buộc nhập
                            placeholder: "Class",
                            helper: "abc",
                          },
                          cmd: {
                            isHelper: true,
                            disable: false, //  true/false cho phép người dụng chọn item
                            visible: true, // true/false để hiển thị uSelectItem
                            isFocus: false,

                            error: {
                              message: "", // message rỗng sẽ không có thông báo
                              type: "", // hiện tại chưa dùng type
                            },
                          },
                        },
                        mode: {
                          isSearch: false,
                        },
                        value: "",
                        abs_Change: this.testInput,
                      },
                    },
                    read_data: {
                      dataFull: {
                        config: {
                          default: {
                            title: "Tên layout", // title của uSelectItem
                            class: "col-md-12 ", // hiển thị chiều dài của uSelectItem
                            required: false, //true/false hiển thị dấu * phân biệt bắt buộc nhập
                            placeholder: "Tên layout",
                            helper: "abc",
                          },
                          cmd: {
                            isHelper: true,
                            disable: false, //  true/false cho phép người dụng chọn item
                            visible: true, // true/false để hiển thị uSelectItem
                            isFocus: false,

                            error: {
                              message: "", // message rỗng sẽ không có thông báo
                              type: "", // hiện tại chưa dùng type
                            },
                          },
                        },
                        mode: {
                          isSearch: false,
                        },
                        value: "Layout mới",
                        abs_Change: this.testInput,
                      },
                    },
                    data_default: {
                      dataFull: {
                        config: {
                          default: {
                            title: "Hướng dẫn", // title của uSelectItem
                            class: "col-md-6 ", // hiển thị chiều dài của uSelectItem
                            required: false, //true/false hiển thị dấu * phân biệt bắt buộc nhập
                            placeholder: "Hướng dẫn",
                            helper: "abc",
                          },
                          cmd: {
                            isHelper: true,
                            disable: false, //  true/false cho phép người dụng chọn item
                            visible: true, // true/false để hiển thị uSelectItem
                            isFocus: false,

                            error: {
                              message: "", // message rỗng sẽ không có thông báo
                              type: "", // hiện tại chưa dùng type
                            },
                          },
                        },
                        mode: {
                          isSearch: false,
                        },
                        value: "",
                        abs_Change: this.testInput,
                      },
                    },
                    is_password: {
                      dataFull: {
                        config: {
                          default: {
                            search: {
                              placeholder: "Search",
                            },
                            helper: "234",
                            data_status: "No Result",
                            title: "Office", // title của uSelectItem
                            class: "col-md-6", // hiển thị chiều dài của uSelectItem
                            required: true, //true/false hiển thị dấu * phân biệt bắt buộc nhập
                          },
                          cmd: {
                            isHelper: true,
                            disable: false, //  true/false cho phép người dụng chọn item
                            visible: true, // true/false để hiển thị uSelectItem
                            isFocus: false,
                            error: {
                              message: "", // message rỗng sẽ không có thông báo
                              type: "", // hiện tại chưa dùng type
                            },
                          },
                          mode: {
                            //hiện tại mode chưa có
                          },
                        },
                        data: [
                          {
                            title: "Có",
                            value: "1",
                          },
                          { title: "Không", value: "123", selected: true },
                        ],
                        search_value: "",
                        abs_Change: this.test1,
                        abs_search: this.search,
                      },
                    },
                    is_upcase: {
                      dataFull: {
                        config: {
                          default: {
                            search: {
                              placeholder: "Search",
                            },
                            helper: "234",
                            data_status: "No Result",
                            title: "Office", // title của uSelectItem
                            class: "col-md-6", // hiển thị chiều dài của uSelectItem
                            required: true, //true/false hiển thị dấu * phân biệt bắt buộc nhập
                          },
                          cmd: {
                            isHelper: true,
                            disable: false, //  true/false cho phép người dụng chọn item
                            visible: true, // true/false để hiển thị uSelectItem
                            isFocus: false,
                            error: {
                              message: "", // message rỗng sẽ không có thông báo
                              type: "", // hiện tại chưa dùng type
                            },
                          },
                          mode: {
                            //hiện tại mode chưa có
                          },
                        },
                        data: [
                          {
                            title: "Có",
                            value: "1",
                          },
                          { title: "Không", value: "123", selected: true },
                        ],
                        search_value: "",
                        abs_Change: this.test1,
                        abs_search: this.search,
                      },
                    },
                    is_lookup: {
                      dataFull: {
                        config: {
                          default: {
                            search: {
                              placeholder: "Search",
                            },
                            helper: "234",
                            data_status: "No Result",
                            title: "Office", // title của uSelectItem
                            class: "col-md-6", // hiển thị chiều dài của uSelectItem
                            required: true, //true/false hiển thị dấu * phân biệt bắt buộc nhập
                          },
                          cmd: {
                            isHelper: true,
                            disable: false, //  true/false cho phép người dụng chọn item
                            visible: true, // true/false để hiển thị uSelectItem
                            isFocus: false,
                            error: {
                              message: "", // message rỗng sẽ không có thông báo
                              type: "", // hiện tại chưa dùng type
                            },
                          },
                          mode: {
                            //hiện tại mode chưa có
                          },
                        },
                        data: [
                          {
                            title: "Có",
                            value: "1",
                          },
                          { title: "Không", value: "123", selected: true },
                        ],
                        search_value: "",
                        abs_Change: this.test1,
                        abs_search: this.search,
                      },
                    },
                    multiValue: {
                      action: {
                        dataFull: {
                          config: {
                            default: {
                              title: "HÀNH ĐỘNG",
                            },
                          },
                        },
                      },
                      action_click: {
                        dataFull: {
                          config: {
                            default: {
                              search: {
                                placeholder: "Search",
                              },
                              helper: "234",
                              data_status: "No Result",
                              title: "Office", // title của uSelectItem
                              class: "col-md-6", // hiển thị chiều dài của uSelectItem
                              required: true, //true/false hiển thị dấu * phân biệt bắt buộc nhập
                            },
                            cmd: {
                              isHelper: true,
                              disable: false, //  true/false cho phép người dụng chọn item
                              visible: true, // true/false để hiển thị uSelectItem
                              isFocus: false,
                              error: {
                                message: "", // message rỗng sẽ không có thông báo
                                type: "", // hiện tại chưa dùng type
                              },
                            },
                            mode: {
                              //hiện tại mode chưa có
                            },
                          },
                          data: [
                            {
                              title: "Có",
                              value: "1",
                            },
                            { title: "Không", value: "123", selected: true },
                          ],
                          search_value: "",
                          abs_Change: this.test1,
                          abs_search: this.search,
                        },
                      },
                      action_text_area: {
                        dataFull: {
                          config: {
                            default: {
                              helper: "test",
                              title: "Actions", // title của uTextArea
                              class: "col-md-12", // số cột hiển thị trên view
                              rows: 10, // độ rộng của textarea
                              code_form_component: "", // xác định xem đang dùng textarea nào
                            },
                            cmd: {
                              isHelper: true,
                              disable: false, // true/false cho phép nhập textarea hay không
                              visible: true, // true/false cho phép hiển thị textarea hay không
                            },
                            error: {
                              message: "", // thông báo lỗi
                              type: "", // kiểu định dạng lỗi: danger, info, success, gray, default
                            },
                          },
                          data: [], // ở uInput không dùng data
                          value: "test", // nhận vào các kiểu string/number.
                          abs_Change: this.testTextArea,
                        },
                      },
                    },
                  },
                  column1_child1: {
                    name_component: {
                      dataFull: {
                        config: {
                          default: {
                            title: "Tên layout", // title của uSelectItem
                            class: "col-md-6 ", // hiển thị chiều dài của uSelectItem
                            required: false, //true/false hiển thị dấu * phân biệt bắt buộc nhập
                            placeholder: "Tên layout",
                            helper: "abc",
                          },
                          cmd: {
                            isHelper: true,
                            disable: false, //  true/false cho phép người dụng chọn item
                            visible: true, // true/false để hiển thị uSelectItem
                            isFocus: false,

                            error: {
                              message: "", // message rỗng sẽ không có thông báo
                              type: "", // hiện tại chưa dùng type
                            },
                          },
                        },
                        mode: {
                          isSearch: false,
                        },
                        value: "Layout mới",
                        abs_Change: this.testInput,
                      },
                    },
                    code_component: {
                      dataFull: {
                        config: {
                          default: {
                            title: "Code", // title của uSelectItem
                            class: "col-md-6 ", // hiển thị chiều dài của uSelectItem
                            required: false, //true/false hiển thị dấu * phân biệt bắt buộc nhập
                            placeholder: "Hướng dẫn",
                            helper: "abc",
                          },
                          cmd: {
                            isHelper: true,
                            disable: false, //  true/false cho phép người dụng chọn item
                            visible: true, // true/false để hiển thị uSelectItem
                            isFocus: false,

                            error: {
                              message: "", // message rỗng sẽ không có thông báo
                              type: "", // hiện tại chưa dùng type
                            },
                          },
                        },
                        mode: {
                          isSearch: false,
                        },
                        value: "",
                        abs_Change: this.testInput,
                      },
                    },
                    class_component: {
                      dataFull: {
                        config: {
                          default: {
                            title: "Class", // title của uSelectItem
                            class: "col-md-6 ", // hiển thị chiều dài của uSelectItem
                            required: false, //true/false hiển thị dấu * phân biệt bắt buộc nhập
                            placeholder: "Class",
                            helper: "abc",
                          },
                          cmd: {
                            isHelper: true,
                            disable: false, //  true/false cho phép người dụng chọn item
                            visible: true, // true/false để hiển thị uSelectItem
                            isFocus: false,

                            error: {
                              message: "", // message rỗng sẽ không có thông báo
                              type: "", // hiện tại chưa dùng type
                            },
                          },
                        },
                        mode: {
                          isSearch: false,
                        },
                        value: "",
                        abs_Change: this.testInput,
                      },
                    },
                    permission_component: {
                      dataFull: {
                        config: {
                          default: {
                            title: "Tên layout", // title của uSelectItem
                            class: "col-md-6 ", // hiển thị chiều dài của uSelectItem
                            required: false, //true/false hiển thị dấu * phân biệt bắt buộc nhập
                            placeholder: "Tên layout",
                            helper: "abc",
                          },
                          cmd: {
                            isHelper: true,
                            disable: false, //  true/false cho phép người dụng chọn item
                            visible: true, // true/false để hiển thị uSelectItem
                            isFocus: false,

                            error: {
                              message: "", // message rỗng sẽ không có thông báo
                              type: "", // hiện tại chưa dùng type
                            },
                          },
                        },
                        mode: {
                          isSearch: false,
                        },
                        value: "Layout mới",
                        abs_Change: this.testInput,
                      },
                    },
                    condition_component: {
                      dataFull: {
                        config: {
                          default: {
                            title: "Hướng dẫn", // title của uSelectItem
                            class: "col-md-6 ", // hiển thị chiều dài của uSelectItem
                            required: false, //true/false hiển thị dấu * phân biệt bắt buộc nhập
                            placeholder: "Hướng dẫn",
                            helper: "abc",
                          },
                          cmd: {
                            isHelper: true,
                            disable: false, //  true/false cho phép người dụng chọn item
                            visible: true, // true/false để hiển thị uSelectItem
                            isFocus: false,

                            error: {
                              message: "", // message rỗng sẽ không có thông báo
                              type: "", // hiện tại chưa dùng type
                            },
                          },
                        },
                        mode: {
                          isSearch: false,
                        },
                        value: "",
                        abs_Change: this.testInput,
                      },
                    },
                    of_group: {
                      dataFull: {
                        config: {
                          default: {
                            title: "Class", // title của uSelectItem
                            class: "col-md-6 ", // hiển thị chiều dài của uSelectItem
                            required: false, //true/false hiển thị dấu * phân biệt bắt buộc nhập
                            placeholder: "Class",
                            helper: "abc",
                          },
                          cmd: {
                            isHelper: true,
                            disable: false, //  true/false cho phép người dụng chọn item
                            visible: true, // true/false để hiển thị uSelectItem
                            isFocus: false,

                            error: {
                              message: "", // message rỗng sẽ không có thông báo
                              type: "", // hiện tại chưa dùng type
                            },
                          },
                        },
                        mode: {
                          isSearch: false,
                        },
                        value: "",
                        abs_Change: this.testInput,
                      },
                    },
                  },
                  column1_child3: {
                    disable: {
                      dataFull: {
                        config: {
                          default: {
                            search: {
                              placeholder: "Search",
                            },
                            helper: "234",
                            data_status: "No Result",
                            title: "Office", // title của uSelectItem
                            class: "col-md-6", // hiển thị chiều dài của uSelectItem
                            required: true, //true/false hiển thị dấu * phân biệt bắt buộc nhập
                          },
                          cmd: {
                            isHelper: true,
                            disable: false, //  true/false cho phép người dụng chọn item
                            visible: true, // true/false để hiển thị uSelectItem
                            isFocus: false,
                            error: {
                              message: "", // message rỗng sẽ không có thông báo
                              type: "", // hiện tại chưa dùng type
                            },
                          },
                          mode: {
                            //hiện tại mode chưa có
                          },
                        },
                        data: [
                          {
                            title: "Có",
                            value: "1",
                          },
                          { title: "Không", value: "123", selected: true },
                        ],
                        search_value: "",
                        abs_Change: this.test1,
                        abs_search: this.search,
                      },
                    },
                    visible: {
                      dataFull: {
                        config: {
                          default: {
                            search: {
                              placeholder: "Search",
                            },
                            helper: "234",
                            data_status: "No Result",
                            title: "Office", // title của uSelectItem
                            class: "col-md-6", // hiển thị chiều dài của uSelectItem
                            required: true, //true/false hiển thị dấu * phân biệt bắt buộc nhập
                          },
                          cmd: {
                            isHelper: true,
                            disable: false, //  true/false cho phép người dụng chọn item
                            visible: true, // true/false để hiển thị uSelectItem
                            isFocus: false,
                            error: {
                              message: "", // message rỗng sẽ không có thông báo
                              type: "", // hiện tại chưa dùng type
                            },
                          },
                         
                        },
                        data: [
                          {
                            title: "Có",
                            value: "1",
                          },
                          { title: "Không", value: "123", selected: true },
                        ],
                        search_value: "",
                        abs_Change: this.test1,
                        abs_search: this.search,
                      },
                    },
                  },
                  column1_child4: {},
                  column1_child5: {
                    is_required: {
                      dataFull: {
                        isCheck: false,
                        title: "Bắt buộc nhập",
                        class: "col-md-12",
                        config: {
                          cmd: {
                            disable: false,
                            error: { message: "", type: "" },
                          },
                        },
                      },
                    },
                    min_words: {
                      dataFull: {
                        config: {
                          default: {
                            title: "Class", // title của uSelectItem
                            class: "col-md-6 ", // hiển thị chiều dài của uSelectItem
                            required: false, //true/false hiển thị dấu * phân biệt bắt buộc nhập
                            placeholder: "Class",
                            helper: "abc",
                          },
                          cmd: {
                            isHelper: true,
                            disable: false, //  true/false cho phép người dụng chọn item
                            visible: true, // true/false để hiển thị uSelectItem
                            isFocus: false,

                            error: {
                              message: "", // message rỗng sẽ không có thông báo
                              type: "", // hiện tại chưa dùng type
                            },
                          },
                        },
                        mode: {
                          isSearch: false,
                        },
                        value: "",
                        abs_Change: this.testInput,
                      },
                    },
                    max_words: {
                      dataFull: {
                        config: {
                          default: {
                            title: "Class", // title của uSelectItem
                            class: "col-md-6 ", // hiển thị chiều dài của uSelectItem
                            required: false, //true/false hiển thị dấu * phân biệt bắt buộc nhập
                            placeholder: "Class",
                            helper: "abc",
                          },
                          cmd: {
                            isHelper: true,
                            disable: false, //  true/false cho phép người dụng chọn item
                            visible: true, // true/false để hiển thị uSelectItem
                            isFocus: false,

                            error: {
                              message: "", // message rỗng sẽ không có thông báo
                              type: "", // hiện tại chưa dùng type
                            },
                          },
                        },
                        mode: {
                          isSearch: false,
                        },
                        value: "",
                        abs_Change: this.testInput,
                      },
                    },
                    structure_regex: {
                      dataFull: {
                        config: {
                          default: {
                            title: "Class", // title của uSelectItem
                            class: "col-md-6 ", // hiển thị chiều dài của uSelectItem
                            required: false, //true/false hiển thị dấu * phân biệt bắt buộc nhập
                            placeholder: "Class",
                            helper: "abc",
                          },
                          cmd: {
                            isHelper: true,
                            disable: false, //  true/false cho phép người dụng chọn item
                            visible: true, // true/false để hiển thị uSelectItem
                            isFocus: false,

                            error: {
                              message: "", // message rỗng sẽ không có thông báo
                              type: "", // hiện tại chưa dùng type
                            },
                          },
                        },
                        mode: {
                          isSearch: false,
                        },
                        value: "",
                        abs_Change: this.testInput,
                      },
                    },
                  },

                  column1_child6: {
                    title: "Ten component theo ngon ngu",
                    helper: "123",
                    list_lang_inputs: [
                      {
                        dataFull: {
                          config: {
                            default: {
                              title: "Tieng Viet", // title của uSelectItem
                              class: "col-md-6 ", // hiển thị chiều dài của uSelectItem
                              required: false, //true/false hiển thị dấu * phân biệt bắt buộc nhập
                              placeholder: "",
                              helper_description: "abc",
                            },
                            cmd: {
                              isHelper: false,
                              disable: false, //  true/false cho phép người dụng chọn item
                              visible: true, // true/false để hiển thị uSelectItem
                              isFocus: false,

                              error: {
                                message: "", // message rỗng sẽ không có thông báo
                                type: "", // hiện tại chưa dùng type
                              },
                            },
                          },
                          mode: {
                            isSearch: false,
                          },
                          value: "",
                          abs_Change: this.testInput,
                        },
                      },
                      {
                        dataFull: {
                          config: {
                            default: {
                              title: "Tieng Anh", // title của uSelectItem
                              class: "col-md-6 ", // hiển thị chiều dài của uSelectItem
                              required: false, //true/false hiển thị dấu * phân biệt bắt buộc nhập
                              placeholder: "",
                              helper_description: "abc",
                            },
                            cmd: {
                              isHelper: false,
                              disable: false, //  true/false cho phép người dụng chọn item
                              visible: true, // true/false để hiển thị uSelectItem
                              isFocus: false,

                              error: {
                                message: "", // message rỗng sẽ không có thông báo
                                type: "", // hiện tại chưa dùng type
                              },
                            },
                          },
                          mode: {
                            isSearch: false,
                          },
                          value: "",
                          abs_Change: this.testInput,
                        },
                      },
                    ],
                  },
                  list_buttons: [
                    {
                      dataFull: {
                        config: {
                          default: {
                            title: "cancel", // title của button
                            type: "", // nhận 2 dạng type là "" -> default- có background trắng và "primary" -> có background xanh
                            //class: "col-md-1", // độ dài mặc định của uButton là "161px" với button không icon & "96px" với button có icon, nếu muốn thay đổi độ dài thì set .col-* vào class
                            icon: "", // nếu uButton có icon thì set vào, còn không có thì không dùng
                          },

                          cmd: {
                            disable: false, //true/false
                            isLoading: false, //truyền vào khi loading.
                            isFocus: false,
                          },
                        },
                        abs_Click: this.test3,
                      },
                    },
                    {
                      dataFull: {
                        config: {
                          default: {
                            title: "save", // title của button
                            type: "primary", // nhận 2 dạng type là "" -> default- có background trắng và "primary" -> có background xanh
                            //class: "col-md-1", // độ dài mặc định của uButton là "161px" với button không icon & "96px" với button có icon, nếu muốn thay đổi độ dài thì set .col-* vào class
                            icon: "", // nếu uButton có icon thì set vào, còn không có thì không dùng
                          },

                          cmd: {
                            disable: false, //true/false
                            isLoading: false, //truyền vào khi loading.
                            isFocus: false,
                          },
                        },
                        abs_Click: this.test3,
                      },
                    },
                  ],
                },

                modal: {
                  title: "Config Component",
                  abs_Close: this.abs_Close,
                  visibility: this.state.visibility,
                },
              }}
            ></ModalConfirm>