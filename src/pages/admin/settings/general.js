import Head from "next/head";
import AdminSidebar from "../../../../components/admin/adminSidebar";

const General = () => {
  return (
    <>
      <Head>
        <title>Admin Dashboard</title>
      </Head>
      <div className="block lg:flex justify-between">
        <div className="w-[100%] lg:w-[20%] h-14 lg:h-screen flex justify-between">
          <AdminSidebar />
        </div>
        <div className="w-[100%] lg:w-[80%] bg-slate-100 px-0 lg:px-10">
          {/* -------------body content Start------------------ */}

          {/* --------------Site Meta-------------------- */}
          <div class="px-2 ">
            <div class="flex flex-no-wrap items-start">
              <div class="w-full">
                <div class="px-2">
                  <div class="bg-white rounded shadow pt-1 pb-5 mt-5">
                    <form>
                      {/* -----------------Site Info------------- */}
                      <div class="mt-10 px-7">
                        <p class="text-xl font-semibold leading-tight text-gray-800">
                          Site Details
                        </p>
                        <div className="divider h-0"></div>
                        <div class="grid w-full grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-7 mt-7">
                          <div>
                            <p class="text-base font-medium leading-none text-gray-800">
                              Site Title
                            </p>
                            <input
                              type="text"
                              class="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50 placeholder:text-grey-400 text-sm"
                              placeholder="Travel.xone"
                            />
                          </div>
                          <div>
                            <p class="text-base font-medium leading-none text-gray-800">
                              Site Address (URL)
                            </p>
                            <input
                              type="text"
                              class="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50 placeholder:text-grey-400 text-sm"
                              id="floatingInput"
                              placeholder="https://demo.webapp.com"
                            />
                          </div>
                          <div>
                            <p class="text-base font-medium leading-none text-gray-800">
                              Administration Email Address
                            </p>
                            <input
                              type="text"
                              class="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50 placeholder:text-grey-400 text-sm"
                              placeholder="travel.xone@gmail.com"
                              disabled
                            />
                            <p class="mt-3 text-xs leading-[15px] text-gray-600">
                              Administration Email cannot be changed.
                            </p>
                          </div>
                          <div>
                            <p class="font-medium leading-none text-gray-800 text-md">
                              New User Default Role
                            </p>
                            {/* -----------------Select for Role---------------- */}
                            <div class="relative mb-3 max-w-xs">
                              <select class="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50 placeholder:text-grey-400 text-sm">
                                <option
                                  disabled
                                  selected
                                  value="1"
                                  className="text-neutral-500"
                                >
                                  Subscriber
                                </option>
                                <option value="3">Contributor</option>
                                <option value="4">Author</option>
                                <option value="5">Editor</option>
                                <option value="5">Administrator</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* -----------------Meta Details------------- */}
                      <div class="mt-10 px-7">
                        <p class="text-xl font-semibold leading-tight text-gray-800">
                          Meta Details
                        </p>
                        <div className="divider h-0"></div>
                        <div class="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7 mt-7">
                          <div>
                            <p class="text-base font-medium leading-none text-gray-800">
                              Theme
                            </p>
                            {/* -----------------Select for Theme---------------- */}
                            <div class="relative mb-3 max-w-xs">
                              <select class="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50 placeholder:text-grey-400 text-sm">
                                <option
                                  disabled
                                  selected
                                  value="1"
                                  className="text-neutral-500"
                                >
                                  Beginner
                                </option>
                                <option value="3">Intermediate</option>
                                <option value="4">Expert</option>
                              </select>
                            </div>
                            <p class="mt-3 text-xs leading-[15px] text-gray-600">
                              Set the product theme of your liking
                            </p>
                          </div>
                          <div>
                            <p class="text-base font-medium leading-none text-gray-800">
                              Default Layout
                            </p>
                            {/* -----------------Select for Layout---------------- */}
                            <div class="relative mb-3 max-w-xs">
                              <select class="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50 placeholder:text-grey-400 text-sm">
                                <option
                                  disabled
                                  selected
                                  value="1"
                                  className="text-neutral-500"
                                >
                                  Vertical
                                </option>
                                <option value="3">Horizontal</option>
                                <option value="4">primary</option>
                              </select>
                            </div>
                            <p class="mt-3 text-xs leading-[15px] text-gray-600">
                              Select a layout to show your product display
                            </p>
                          </div>
                          <div>
                            <p class="text-base font-medium leading-none text-gray-800">
                              Meta Title
                            </p>
                            <input
                              type="text"
                              class="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50 placeholder:text-grey-400 text-sm"
                              placeholder=" "
                            />
                            <p class="mt-3 text-xs leading-3 text-gray-600">
                              Set a simple and precise meta title
                            </p>
                          </div>
                          <div>
                            <p class="text-base font-medium leading-none text-gray-800">
                              Meta Keywords
                            </p>
                            <input
                              type="text"
                              class="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50 placeholder:text-grey-400 text-sm"
                              placeholder=""
                            />
                            <p class="mt-3 text-xs leading-[15px] text-gray-600">
                              Set words that are related to the product
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* -----------------Meta Description------------ */}
                      <div class="pt-6 border-gray-300 mt-2 px-7">
                        <p class="text-base font-semibold leading-4 text-gray-800">
                          Meta Description
                        </p>
                        <div class="mt-10 border border-gray-300 rounded">
                          <div class="flex flex-wrap items-center px-4 py-3 border-b border-gray-300">
                            <div class="flex h-full gap-2 p-2 rounded cursor-pointer hover:bg-blue-50 w-fit">
                              <p class="text-sm leading-none text-gray-600">
                                Normal
                              </p>
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M2.625 4.3125L6 7.6875L9.375 4.3125"
                                  stroke="#475569"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </div>
                            <div class="flex items-center gap-5 ml-0 lg:ml-7 md:ml-3">
                              <button class="p-1 hover:bg-gray-100 focus:bg-gray-100">
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M5.8335 4.99984C5.8335 4.77882 5.92129 4.56686 6.07757 4.41058C6.23385 4.2543 6.44582 4.1665 6.66683 4.1665H10.8335C11.5106 4.16646 12.1716 4.37262 12.7287 4.75753C13.2857 5.14245 13.7123 5.68788 13.9517 6.32123C14.1911 6.95458 14.232 7.64582 14.0688 8.30296C13.9057 8.96011 13.5463 9.55199 13.0385 9.99984C13.5463 10.4477 13.9057 11.0396 14.0688 11.6967C14.232 12.3539 14.1911 13.0451 13.9517 13.6784C13.7123 14.3118 13.2857 14.8572 12.7287 15.2421C12.1716 15.6271 11.5106 15.8332 10.8335 15.8332H6.66683C6.44582 15.8332 6.23385 15.7454 6.07757 15.5891C5.92129 15.4328 5.8335 15.2209 5.8335 14.9998V4.99984ZM10.8335 9.1665C11.2755 9.1665 11.6994 8.99091 12.012 8.67835C12.3246 8.36579 12.5002 7.94187 12.5002 7.49984C12.5002 7.05781 12.3246 6.63389 12.012 6.32133C11.6994 6.00877 11.2755 5.83317 10.8335 5.83317H7.50016V9.1665H10.8335ZM7.50016 10.8332H10.8335C11.2755 10.8332 11.6994 11.0088 12.012 11.3213C12.3246 11.6339 12.5002 12.0578 12.5002 12.4998C12.5002 12.9419 12.3246 13.3658 12.012 13.6783C11.6994 13.9909 11.2755 14.1665 10.8335 14.1665H7.50016V10.8332Z"
                                    fill="#475569"
                                  />
                                </svg>
                              </button>
                              <button class="p-1 hover:bg-gray-100 focus:bg-gray-100">
                                <svg
                                  width="10"
                                  height="12"
                                  viewBox="0 0 10 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M0.833496 1.00033C0.833496 0.779312 0.921294 0.56735 1.07757 0.41107C1.23385 0.25479 1.44582 0.166992 1.66683 0.166992H8.3335C8.55451 0.166992 8.76647 0.25479 8.92275 0.41107C9.07903 0.56735 9.16683 0.779312 9.16683 1.00033C9.16683 1.22134 9.07903 1.4333 8.92275 1.58958C8.76647 1.74586 8.55451 1.83366 8.3335 1.83366H5.8335V10.167H8.3335C8.55451 10.167 8.76647 10.2548 8.92275 10.4111C9.07903 10.5674 9.16683 10.7793 9.16683 11.0003C9.16683 11.2213 9.07903 11.4333 8.92275 11.5896C8.76647 11.7459 8.55451 11.8337 8.3335 11.8337H1.66683C1.44582 11.8337 1.23385 11.7459 1.07757 11.5896C0.921294 11.4333 0.833496 11.2213 0.833496 11.0003C0.833496 10.7793 0.921294 10.5674 1.07757 10.4111C1.23385 10.2548 1.44582 10.167 1.66683 10.167H4.16683V1.83366H1.66683C1.44582 1.83366 1.23385 1.74586 1.07757 1.58958C0.921294 1.4333 0.833496 1.22134 0.833496 1.00033Z"
                                    fill="#475569"
                                  />
                                </svg>
                              </button>
                              <button class="p-1 hover:bg-gray-100 focus:bg-gray-100">
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M5 14.5882H15V16H5V14.5882ZM6.85714 12.6824C7.24571 13.054 7.70773 13.3424 8.21429 13.5294C8.78065 13.7606 9.38721 13.8805 10 13.8824C10.6128 13.8805 11.2193 13.7606 11.7857 13.5294C12.2759 13.3298 12.7192 13.0324 13.0879 12.6559C13.4566 12.2794 13.7427 11.8319 13.9286 11.3412C14.1505 10.8025 14.2715 10.2285 14.2857 9.64706V4H12.7143V9.64706C12.7138 10.0563 12.6413 10.4624 12.5 10.8471C12.3974 11.183 12.2274 11.4951 12 11.7647C11.7599 12.0131 11.4672 12.2059 11.1429 12.3294C10.7806 12.4767 10.3916 12.5488 10 12.5412C9.60839 12.5488 9.21938 12.4767 8.85714 12.3294C8.52587 12.1855 8.23258 11.9681 8 11.6941C7.77097 11.4257 7.60072 11.1132 7.5 10.7765C7.36902 10.4135 7.2967 10.0323 7.28571 9.64706V4H5.71429V9.64706C5.70569 10.2241 5.80247 10.798 6 11.3412C6.18927 11.8418 6.48107 12.2984 6.85714 12.6824Z"
                                    fill="#475569"
                                  />
                                </svg>
                              </button>
                            </div>
                            <div class="flex items-center justify-end ml-2 gap-x-3 lg:ml-auto md:ml-auto">
                              <p class="text-sm leading-none text-gray-600 cursor-pointer">
                                Add Image
                              </p>
                              <svg
                                class=" "
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clip-path="url(#clip0_810_19372)">
                                  <path
                                    d="M7.5025 6.875C7.5025 7.37228 7.30496 7.84919 6.95333 8.20083C6.6017 8.55246 6.12478 8.75 5.6275 8.75C5.13022 8.75 4.65331 8.55246 4.30168 8.20083C3.95005 7.84919 3.7525 7.37228 3.7525 6.875C3.7525 6.37772 3.95005 5.90081 4.30168 5.54917C4.65331 5.19754 5.13022 5 5.6275 5C6.12478 5 6.6017 5.19754 6.95333 5.54917C7.30496 5.90081 7.5025 6.37772 7.5025 6.875Z"
                                    fill="#475569"
                                  />
                                  <path
                                    d="M1.875 2.5C1.37772 2.5 0.900805 2.69754 0.549175 3.04917C0.197544 3.40081 0 3.87772 0 4.375L0 15.625C0 16.1223 0.197544 16.5992 0.549175 16.9508C0.900805 17.3025 1.37772 17.5 1.875 17.5H18.125C18.6223 17.5 19.0992 17.3025 19.4508 16.9508C19.8025 16.5992 20 16.1223 20 15.625V4.375C20 3.87772 19.8025 3.40081 19.4508 3.04917C19.0992 2.69754 18.6223 2.5 18.125 2.5H1.875ZM18.125 3.75C18.2908 3.75 18.4497 3.81585 18.5669 3.93306C18.6842 4.05027 18.75 4.20924 18.75 4.375V11.875L14.0312 9.44125C13.914 9.38253 13.7813 9.36216 13.6519 9.38302C13.5224 9.40388 13.4028 9.46492 13.31 9.5575L8.6725 14.195L5.3475 11.98C5.22745 11.9001 5.08345 11.8641 4.93992 11.8783C4.79639 11.8924 4.66217 11.9557 4.56 12.0575L1.2525 15V15.675C1.25101 15.6584 1.25017 15.6417 1.25 15.625V4.375C1.25 4.20924 1.31585 4.05027 1.43306 3.93306C1.55027 3.81585 1.70924 3.75 1.875 3.75H18.125Z"
                                    fill="#475569"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_810_19372">
                                    <rect width="20" height="20" fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                          </div>
                          <textarea
                            class="resize-none w-full h-[170px] px-4 py-4 text-base outline-none text-slate-600"
                            placeholder="Start typing here ..."
                          ></textarea>
                        </div>
                      </div>

                      <div class="px-7 pt-7">
                        {/* ----------Personal Info---------- */}
                        <div class="w-80">
                          <div class="flex items-center">
                            <h1 class="text-xl font-semibold leading-tight text-gray-800">
                              Personal Information
                            </h1>
                          </div>
                          <p class="focus:outline-none mt-4 text-sm leading-5 text-gray-500">
                            Information about the section could go here and a
                            brief description of how this might be used.
                          </p>
                        </div>
                        <div className="divider h-0"></div>
                        <div>
                          <div class="md:flex items-start  mt-8">
                            <div class="md:w-64">
                              <label
                                class="text-sm leading-none text-gray-800"
                                id="firstName"
                              >
                                First name
                              </label>
                              <input
                                type="name"
                                tabindex="0"
                                class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                                aria-labelledby="firstName"
                                placeholder="Abul"
                              />
                            </div>
                            <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                              <label
                                class="text-sm leading-none text-gray-800"
                                id="lastName"
                              >
                                Last name
                              </label>
                              <input
                                type="name"
                                tabindex="0"
                                class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                                aria-labelledby="lastName"
                                placeholder="Kalam"
                              />
                            </div>
                          </div>
                          <div class="md:flex items-center mt-8">
                            <div class="md:w-64">
                              <label
                                class="text-sm leading-none text-gray-800"
                                id="emailAddress"
                              >
                                Email address
                              </label>
                              <input
                                type="email"
                                tabindex="0"
                                class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                                aria-labelledby="emailAddress"
                                placeholder="youremail@example.com"
                              />
                            </div>
                            <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                              <label
                                class="text-sm leading-none text-gray-800"
                                id="phone"
                              >
                                Phone number
                              </label>
                              <input
                                type="name"
                                tabindex="0"
                                class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                                aria-labelledby="phone"
                                placeholder="123-1234567"
                              />
                            </div>
                          </div>
                        </div>
                        {/* ---------Security Info------- */}
                        <div class="w-80 pt-7">
                          <div class="flex items-center">
                            <h1 class="text-xl font-semibold leading-tight text-gray-800">
                              Security
                            </h1>
                          </div>
                          <p class="focus:outline-none mt-4 text-sm leading-5 text-gray-500">
                            Information about the section could go here and a
                            brief description of how this might be used.
                          </p>
                        </div>
                        <div className="divider h-0"></div>
                        <div>
                          <div class="md:flex items-center mt-4">
                            <div class="md:w-64">
                              <label
                                class="text-sm leading-none text-gray-800"
                                id="password"
                              >
                                Password
                              </label>
                              <input
                                type="name"
                                tabindex="0"
                                class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                                aria-labelledby="password"
                                placeholder="Enter your password"
                              />
                            </div>
                            <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                              <label
                                class="text-sm leading-none text-gray-800"
                                id="securityCode"
                              >
                                Security Code
                              </label>
                              <input
                                type="name"
                                tabindex="0"
                                class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                                aria-labelledby="securityCode"
                                placeholder="Enter your security code"
                              />
                            </div>
                          </div>
                          <div class="md:flex items-center mt-8">
                            <div class="md:w-64">
                              <label
                                class="text-sm leading-none text-gray-800"
                                id="recoverEmail"
                              >
                                Recovery Email address
                              </label>
                              <input
                                type="name"
                                tabindex="0"
                                class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                                placeholder="Your recovery email"
                              />
                            </div>
                            <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                              <label
                                class="text-sm leading-none text-gray-800"
                                id="altPhone"
                              >
                                Alternate phone number
                              </label>
                              <input
                                type="name"
                                tabindex="0"
                                class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                                aria-labelledby="altPhone"
                                placeholder="Your alternate phone number"
                              />
                            </div>
                          </div>
                        </div>
                        {/* ----------Alert Message----------- */}
                        <div class="w-full container mx-auto mt-10 rounded bg-gray-100 dark:bg-gray-700  xl:w-full">
                          <div class="xl:w-full py-5 px-0 lg:px-8">
                            <div class="flex items-center mx-auto">
                              <div class="container mx-auto">
                                <div class="mx-auto xl:w-full">
                                  <p class="text-lg text-gray-800 dark:text-gray-100 font-bold">
                                    Alerts
                                  </p>
                                  <p class="text-sm text-gray-600 dark:text-gray-400 pt-1">
                                    Get updates of any new activity or features.
                                    Turn on/off your preferences
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="container mx-auto pb-6">
                            <div class="flex items-center pb-4 border-b border-gray-300 dark:border-gray-700 px-0 lg:px-8 text-gray-800 dark:text-gray-100">
                              <img
                                class="dark:hidden"
                                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/simple_form-svg7.svg"
                                alt="mail"
                              />
                              <img
                                class="dark:block hidden"
                                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/simple_form-svg7dark.svg"
                                alt="mail"
                              />
                              <p class="text-sm font-bold ml-2 text-gray-800 dark:text-gray-100">
                                Via Email
                              </p>
                            </div>
                            <div class="px-0 lg:px-8">
                              <div class="flex justify-between items-center mb-8 mt-4">
                                <div class="w-9/12">
                                  <p class="text-sm text-gray-800 dark:text-gray-100 pb-1">
                                    Comments
                                  </p>
                                  <p
                                    id="cb1"
                                    class="text-sm text-gray-600 dark:text-gray-400"
                                  >
                                    Get notified when a post or comment is made
                                  </p>
                                </div>
                                <input type="checkbox" className="toggle " />
                              </div>

                              <div class="flex justify-between items-center mb-8">
                                <div class="w-9/12">
                                  <p class="text-sm text-gray-800 dark:text-gray-100 pb-1">
                                    Product Updates
                                  </p>
                                  <p
                                    id="cb3"
                                    class="text-sm text-gray-600 dark:text-gray-400"
                                  >
                                    Get notifitied when there is a new product
                                    feature or upgrades
                                  </p>
                                </div>
                                <input type="checkbox" className="toggle " />
                              </div>
                            </div>
                            <div class="pb-4 border-b border-gray-300 dark:border-gray-700 px-0 lg:px-8">
                              <div class="flex items-center text-gray-800 dark:text-gray-100">
                                <img
                                  class="dark:hidden"
                                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/simple_form-svg8.svg"
                                  alt="notification"
                                />
                                <img
                                  class="dark:hidden"
                                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/simple_form-svg8dark.svg"
                                  alt="notification"
                                />
                                <p class="text-sm font-bold ml-2 text-gray-800 dark:text-gray-100">
                                  Push Notifications
                                </p>
                              </div>
                            </div>
                            <div class="px-0 lg:px-8">
                              <div class="flex justify-between items-center mb-8 mt-4">
                                <div class="w-9/12">
                                  <p class="text-sm text-gray-800 dark:text-gray-100 pb-1">
                                    Comments
                                  </p>
                                  <p
                                    id="cb4"
                                    class="text-sm text-gray-600 dark:text-gray-400"
                                  >
                                    Get notified when a post or comment is made
                                  </p>
                                </div>
                                <input type="checkbox" className="toggle " />
                              </div>
                              <div class="flex justify-between items-center mb-8">
                                <div class="w-9/12">
                                  <p class="text-sm text-gray-800 dark:text-gray-100 pb-1">
                                    Product Updates
                                  </p>
                                  <p
                                    id="cb6"
                                    class="text-sm text-gray-600 dark:text-gray-400"
                                  >
                                    Get notifitied when there is a new product
                                    feature or upgrades
                                  </p>
                                </div>
                                <input type="checkbox" className="toggle " />
                              </div>
                            </div>
                            {/* -------Membership Notification------------ */}
                            <div class="px-0 lg:px-8  border-t border-gray-300 dark:border-gray-700">
                            <p class="text-sm text-gray-800 dark:text-gray-100 pb-1 pt-5">
                            Membership
                                  </p>
                            <div className="form-control w-[70%] lg:w-[35%]">
                              <label className="cursor-pointer label">
                                <input
                                  type="checkbox"
                                  className="checkbox checkbox-success"
                                />
                                <span className="label-text">
                                Anyone can register
                                </span>
                              </label>
                            </div>
                            </div>
                          </div>
                        </div>
                        {/* -----------Submit button---------- */}
                        <div class="container mx-auto w-11/12 xl:w-full">
                          <div class="w-full py-4 sm:px-0 bg-white dark:bg-gray-800 flex justify-end">
                            <button
                              role="button"
                              aria-label="cancel form"
                              class="bg-gray-200 focus:outline-none transition duration-150 ease-in-out hover:bg-gray-300 dark:bg-gray-700 rounded text-indigo-600 dark:text-indigo-600 px-6 py-2 text-xs mr-4 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
                            >
                              Cancel
                            </button>
                            <button
                              role="button"
                              aria-label="Save form"
                              class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-2 text-sm"
                              type="submit"
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* -------------body content End------------------ */}
        </div>
      </div>
    </>
  );
};

export default General;

General.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
