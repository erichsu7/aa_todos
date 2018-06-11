export const fetchSteps = () => (
  $.get("/api/steps")
)

export const createStep = step => (
  $.post("/api/steps", { step })
)

export const updateStep = step => (
  $.ajax({
    method: "patch",
    url: "/api/steps/" + step.id,
    data: { step }
  })
)

export const deleteStep = step => (
  $.ajax({
    method: "delete",
    url: "/api/steps/" + step.id
  })
)
