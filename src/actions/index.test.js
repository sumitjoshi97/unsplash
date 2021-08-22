const index = require("./index")
// @ponicode
describe("index.loadImages", () => {
    test("0", () => {
        let callFunction = () => {
            index.loadImages()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.setError", () => {
    test("0", () => {
        let callFunction = () => {
            index.setError("invalid choice")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.setError("ValueError")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index.setError("error\n")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index.setError("multiple errors occurred")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index.setError("too many arguments")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index.setError(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.loadImageStats", () => {
    test("0", () => {
        let callFunction = () => {
            index.loadImageStats("project_secret_")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.loadImageStats("proj_")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index.loadImageStats(2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index.loadImageStats("YOUR_PROJECT_ID")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index.loadImageStats("_14")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index.loadImageStats(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.setImageStats", () => {
    test("0", () => {
        let callFunction = () => {
            index.setImageStats("_14", "https://api.telegram.org/")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.setImageStats("fake_project", "https://")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index.setImageStats("fake_project", "ponicode.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index.setImageStats("fake_project_id", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index.setImageStats("projects/", "https://croplands.org/app/a/reset?token=")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index.setImageStats(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.setImageStatsError", () => {
    test("0", () => {
        let callFunction = () => {
            index.setImageStatsError("_14")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.setImageStatsError("fake_project_id")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index.setImageStatsError("project_secret_")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index.setImageStatsError("YOUR_PROJECT_ID")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index.setImageStatsError(2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index.setImageStatsError(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
