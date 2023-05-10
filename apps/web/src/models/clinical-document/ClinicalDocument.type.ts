export interface ClinicalDocument<T = unknown> {
  id?: string; // This gets autogenerated, see ClinicalDocument.schema.ts
  connection_record_id: string;
  user_id: string;
  data_record: {
    raw: T;
    format: 'FHIR.DSTU2';
    content_type: 'application/json' | 'application/xml' | string;
    resource_type:
      | 'immunization'
      | 'procedure'
      | 'condition'
      | 'observation'
      | 'diagnosticreport'
      | 'medicationstatement'
      | 'patient'
      | 'allergyintolerance'
      | 'practitioner'
      | 'documentreference'
      | 'documentreference_attachment'
      | 'careplan'
      | 'encounter';
    version_history: T[];
  };
  metadata?: {
    id?: string;
    date?: string;
    display_name?: string;
    loinc_coding?: string[];
  };
}

export interface MergeClinicalDocument<T> extends ClinicalDocument {
  data_items?: T[];
}
