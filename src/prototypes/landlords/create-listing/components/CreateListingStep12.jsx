import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../../../components/ui/Button';
import Typography from '../../../../components/ui/Typography';
import Select from '../../../../components/ui/Select';
import Input from '../../../../components/ui/Input';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const CreateListingStep12 = ({ onNext, onPrev, formData, updateFormData }) => {
  const [condition, setCondition] = useState(formData.condition || '');
  const [buildYear, setBuildYear] = useState(formData.buildYear || '');
  const [bathroomReno, setBathroomReno] = useState(formData.bathroomReno || '');
  const [kitchenReno, setKitchenReno] = useState(formData.kitchenReno || '');
  const [energyClass, setEnergyClass] = useState(formData.energyClass || '');

  const conditionOptions = [
    { value: '', label: 'Vet inte' },
    { value: 'new', label: 'Tillfredsställande' },
    { value: 'good', label: 'Bra' },
    { value: 'satisfactory', label: 'Tillfredsställande' },
    { value: 'poor', label: 'Dålig' },
  ];

  const renovationOptions = [
    { value: '', label: 'Vet inte' },
    { value: '0-4', label: '0-4' },
    { value: '5-9', label: '5-9' },
    { value: '10-19', label: '10-19' },
    { value: '20+', label: '20+' },
  ];

  const energyOptions = [
    { value: '', label: 'Vet inte' },
    { value: 'A', label: 'A' },
    { value: 'B', label: 'B' },
    { value: 'C', label: 'C' },
    { value: 'D', label: 'D' },
    { value: 'E', label: 'E' },
    { value: 'F', label: 'F' },
    { value: 'G', label: 'G' },
  ];

  const handleConditionChange = (value) => {
    setCondition(value);
    updateFormData({ condition: value });
  };

  const handleBuildYearChange = (e) => {
    setBuildYear(e.target.value);
    updateFormData({ buildYear: e.target.value });
  };

  const handleBathroomRenoChange = (value) => {
    setBathroomReno(value);
    updateFormData({ bathroomReno: value });
  };

  const handleKitchenRenoChange = (value) => {
    setKitchenReno(value);
    updateFormData({ kitchenReno: value });
  };

  const handleEnergyClassChange = (value) => {
    setEnergyClass(value);
    updateFormData({ energyClass: value });
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-sm">
        <div className="p-8 space-y-8">
          <div className="space-y-4">
            <Typography variant="title-lg" className="text-gray-900">
              Mer om bostaden och dess skick
            </Typography>
            <Typography variant="body-md" className="text-gray-600">
              Sökande är ofta intresserade av renoveringar och när huset byggdes.
            </Typography>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Bostadens skick <span className="text-gray-400">(Valfritt)</span>
              </label>
              <Select
                value={condition}
                onValueChange={handleConditionChange}
                options={conditionOptions}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Bostadens byggnadsår <span className="text-gray-400">(Valfritt)</span>
              </label>
              <Input
                value={buildYear}
                onChange={handleBuildYearChange}
                placeholder="1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Badrum - år sedan renovering <span className="text-gray-400">(Valfritt)</span>
              </label>
              <Select
                value={bathroomReno}
                onValueChange={handleBathroomRenoChange}
                options={renovationOptions}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Kök - år sedan renovering <span className="text-gray-400">(Valfritt)</span>
              </label>
              <Select
                value={kitchenReno}
                onValueChange={handleKitchenRenoChange}
                options={renovationOptions}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Energiklass <span className="text-gray-400">(Valfritt)</span>
              </label>
              <Select
                value={energyClass}
                onValueChange={handleEnergyClassChange}
                options={energyOptions}
              />
            </div>
          </div>
        </div>

        <div className="px-8 py-6 bg-white border-t border-gray-200 flex items-center justify-between">
          <button
            onClick={onPrev}
            className="flex items-center justify-center w-12 h-12 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
            aria-label="Tillbaka"
          >
            <ArrowLeftIcon className="h-5 w-5 text-gray-600" />
          </button>
          <Button
            variant="primary"
            size="lg"
            onClick={onNext}
          >
            Nästa
          </Button>
        </div>
      </div>
    </div>
  );
};

CreateListingStep12.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  updateFormData: PropTypes.func.isRequired,
};

export default CreateListingStep12; 