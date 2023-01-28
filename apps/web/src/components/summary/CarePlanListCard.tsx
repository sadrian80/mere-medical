import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { BundleEntry, CarePlan } from 'fhir/r2';
import { Fragment } from 'react';
import { ClinicalDocument } from '../../models/clinical-document/ClinicalDocument.type';
import { TimelineCardBase } from '../timeline/TimelineCardBase';

export function CarePlanListCard({
  items,
}: {
  items: ClinicalDocument<BundleEntry<CarePlan>>[];
}) {
  if (
    items.length === 0
    // items?.[0]?.data_record.raw.resource?.goal === undefined ||
    // items?.[0]?.data_record.raw.resource?.goal?.length === undefined
  )
    return null;
  return (
    <Disclosure defaultOpen={true}>
      {({ open }) => (
        <>
          <Disclosure.Button className="w-full font-bold">
            <div className="flex w-full items-center justify-between py-6 text-xl font-extrabold">
              Care Plan
              <ChevronDownIcon
                className={` h-8 w-8 ${open ? 'rotate-180 transform' : ''}`}
              />
            </div>
          </Disclosure.Button>
          <Disclosure.Panel>
            <TimelineCardBase>
              <div className="min-w-0 flex-1">
                <span className="absolute inset-0" aria-hidden="true" />
                {items.map((item) => (
                  <Fragment key={item.metadata?.id}>
                    {item.data_record.raw.resource?.goal &&
                      item.data_record.raw.resource?.goal?.length !== 0 && (
                        <div className="py-2">
                          {item.data_record.raw.resource?.addresses?.map(
                            (item) => (
                              <p
                                key={item.id}
                                className="font-bold text-gray-800"
                              >
                                {item.display}
                              </p>
                            )
                          )}
                          <ul>
                            {item.data_record.raw.resource?.goal?.map(
                              (item) => (
                                <li
                                  key={item.id}
                                  className="pl-4 text-base text-gray-600"
                                >
                                  {' -    '}
                                  {item.display}
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      )}
                  </Fragment>
                ))}
              </div>
            </TimelineCardBase>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
