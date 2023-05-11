import instance from "./index"
const preUrlPath = "/app/group"

const jobgroupApi = {
  init: {
    r: params => {
      return instance.get(`${preUrlPath}/listPage`,
        params
      )

    }
  },
  search: {
    r: params => {
      return instance.get(`${preUrlPath}/selectByKey`,
        params
      )

    }
  },
  add: {
    r: params => {
      return instance.post(`${preUrlPath}/create`,
        params
      )

    }
  },
  delete: {
    r: params => {
      return instance.post(`${preUrlPath}/delete`,
        params
      )

    }
  }

}

export {
  jobgroupApi
}
