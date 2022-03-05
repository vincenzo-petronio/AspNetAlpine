using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AspNetAlpine.Controllers
{
    public class StepController : Controller
    {
        // GET: Step
        public ActionResult Index()
        {
            ViewBag.StepId = 1;
            return View();
        }

        public PartialViewResult Back(int stepId)
        {
            switch (stepId)
            {
                default:
                case 1:
                    {
                        ViewBag.StepId = 1;
                        return PartialView("StepOne");
                    }
                case 2:
                    {
                        ViewBag.StepId = 2;
                        return PartialView("StepOne");
                    }
            }
        }

        public PartialViewResult Next(int stepId)
        {
            switch (stepId)
            {
                default:
                case 1:
                    {
                        ViewBag.StepId = 1;
                        return PartialView("StepOne");
                    }
                case 2:
                    {
                        ViewBag.StepId = 2;
                        return PartialView("StepTwo");
                    }
            }
        }

        // GET: Step/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: Step/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Step/Create
        [HttpPost]
        public ActionResult Create(FormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Step/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: Step/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Step/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Step/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}
